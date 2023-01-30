import { beforeEach, afterNotNext, afterEach } from "uni-crazy-router";
import store from "@/store";
import { getToken, whiteList } from "@/utils/auth";

let intercept;
let afterIntercept;
export function bindInterceptLogin() {
  destroyInterceptLogin();
  intercept = beforeEach(async (to, from, next) => {
    // 根据token判断用户是否登录
    const hasToken = getToken();
    if (hasToken) {
      if (to.url === "pages/login/signin") {
        // 如果已经登录了，而去的又是login页就重定向到首页
        afterNotNext(() => {
          uni.switchTab({
            url: "/pages/home/index",
            passedParams: {
              info: "已登录",
            },
          });
        });
      } else {
        const hasUserInfo = store.state.user.userInfo?.uuid;
        if (hasUserInfo) {
          next();
        } else {
          // 如果用户刷新了浏览器，那么需要重新请求基本信息塞到vuex中进行状态管理
          try {
            await store.dispatch("user/getInfo");
            next();
          } catch (error) {
            // 清空token重新去登录
            await store.dispatch("user/signOut");
            uni.showToast({
              title: "出错了",
              icon: "none",
            });
            afterNotNext(() => {
              uni.navigateTo({
                url: "/pages/login/signin",
              });
            });
            return;
          }
        }
      }
    } else {
      if (whiteList.indexOf(to.url) > -1 || to.url === "/") {
        // 白名单没有token也直接放行
        next();
      } else {
        uni.showToast({
          title: "请先登录",
          icon: "none",
        });
        afterNotNext(() => {
          uni.navigateTo({
            url: "/pages/login/signin",
          });
        });
        return;
      }
    }
    next();
  });

  //在小程序中，初次进入页面是 beforeEach 无法自动拦截, 所以在 after 中同样加入拦截功能, 确定就是, 屏幕会闪一下在跳转 （可以使用自定义tabbar来解决）
  afterIntercept = afterEach(async (to, from) => {
    // 根据token判断用户是否登录
    const hasToken = getToken();
    if (hasToken) {
      if (to.url === "pages/login/signin") {
        // 如果已经登录了，而去的又是login页就重定向到首页
        uni.switchTab({
          url: "/pages/home/index",
          passedParams: {
            info: "已登录",
          },
        });
      } else {
        const hasUserInfo = store.state.user.userInfo?.uuid;
        if (!hasUserInfo) {
          // 如果用户刷新了浏览器，那么需要重新请求基本信息塞到vuex中进行状态管理
          try {
            await store.dispatch("user/getInfo");
          } catch (error) {
            // 清空token重新去登录
            await store.dispatch("user/signOut");
            uni.showToast({
              title: "出错了",
              icon: "none",
            });
            uni.navigateTo({
              url: "/pages/login/signin",
            });
          }
        }
      }
    } else {
      if (whiteList.indexOf(to.url) > -1 || to.url === "/") {
        // 白名单没有token也直接放行
      } else {
        uni.showToast({
          title: "请先登录",
          icon: "none",
        });
        uni.navigateTo({
          url: "/pages/login/signin",
        });
      }
    }
  });
}
export function destroyInterceptLogin() {
  if (intercept) {
    intercept(); // 销毁拦截
    intercept = null;
  }
  if (afterIntercept) {
    afterIntercept(); // 销毁拦截
    afterIntercept = null;
  }
}

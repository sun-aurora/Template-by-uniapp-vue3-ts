// const tokens = {
//   admin: {
//     token: 'admin-token'
//   },
//   editor: {
//     token: 'editor-token'
//   }
// }
//
// const users = {
//   'admin-token': {
//     roles: ['admin'],
//     introduction: 'I am a super administrator',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Super Admin'
//   },
//   'editor-token': {
//     roles: ['editor'],
//     introduction: 'I am an editor',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Normal Editor'
//   }
// }

export default [
  // user login
  {
    url: '/open/auth/login',
    type: 'post',
    response: config => {
      // const {username} = config.body
      // const token = tokens[username]
      //
      // // mock error
      // if (!token) {
      //   return {
      //     code: 60204,
      //     message: 'Account and password are incorrect.'
      //   }
      // }

      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 0,
        totalCount: 0,
        xid: '770378si',
        data: {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '',
          nickname: '超级管理员',
          id: 1,
          roleNames: ['超级管理员'],
          email: '',
          username: 'admin',
          token: 'a50c8094c0e511eaa24300ff35fd773d'
        }
      }
    }
  },

  // get user info
  {
    url: '/user/current',
    type: 'get',
    response: config => {
      // const {token} = config.query
      // const info = users[token]
      //
      // // mock error
      // if (!info) {
      //   return {
      //     code: 50008,
      //     message: 'Login failed, unable to get user details.'
      //   }
      // }

      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 0,
        totalCount: 0,
        xid: '573734ud',
        data: {
          id: 1,
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          username: 'admin',
          nickname: '超级管理员',
          phone: '',
          email: '',
          registerSource: 'SYSTEM',
          deleted: 'NO',
          roleNames: ['超级管理员'],
          authorityList: ['ROLE_ADMIN'],
          createUserName: '超级管理员',
          updateUserName: '超级管理员',
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateTime: '2020-07-08 15:01:32.712',
          updateUserId: 1,
          createUserId: 1,
          avatar: {
            name: '03b0d39583f48206768a7534e55bcpng.png',
            uname: '08803b0d39583f48206768a7534e55bc.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          roles: [1],
          mine: ''
        }
      }
    }
  },

  // user logout
  {
    url: '/logout',
    type: 'post',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // user list
  {
    url: '/user/page/1/10',
    type: 'get',
    response: config => {
      let data = [
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '刘海',
          id: 1,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'liuhai'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '王涛',
          id: 2,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'wangtao'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785217586',
          nickname: '李慧',
          id: 3,
          roleNames: ['超级管理员2'],
          email: '56984523@sina.com',
          username: 'lihui'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '张亮亮',
          id: 4,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'zhangliangliang'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '欧阳子成',
          id: 5,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'ouyang'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785217586',
          nickname: '张晓飞',
          id: 6,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'zhangxiaofei'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '李立新',
          id: 7,
          roleNames: ['超级管理员2'],
          email: '56984523@sina.com',
          username: 'lilixin'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '张一楠',
          id: 8,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'zhangyinan'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '李晓鸥',
          id: 9,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'lixiaoou'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '任大飞',
          id: 10,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'rendafei'
        }
      ]
      if (JSON.stringify(config.query) !== '{}') {
        data = data.filter(
          row =>
            row.phone.includes(config.query.containsAll) ||
            row.email.includes(config.query.containsAll) ||
            row.nickname.includes(config.query.containsAll) ||
            row.username.includes(config.query.containsAll)
        )
        console.log('data', data)
      }
      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 0,
        totalCount: 12,
        xid: '770378si',
        data: data
      }
    }
  },
  // user list
  {
    url: '/user/page/2/10',
    type: 'get',
    response: () => {
      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 1,
        totalCount: 12,
        xid: '770378si',
        data: [
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '王菲',
            id: 11,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'wangfei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '刘通',
            id: 12,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'liutong'
          }
        ]
      }
    }
  },
  // user list
  {
    url: '/user/page/1/20',
    type: 'get',
    response: () => {
      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 0,
        totalCount: 12,
        xid: '770378si',
        data: [
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '刘海',
            id: 1,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'liuhai'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '王涛',
            id: 2,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'wangtao'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785217586',
            nickname: '李慧',
            id: 3,
            roleNames: ['超级管理员2'],
            email: '56984523@sina.com',
            username: 'lihui'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '张亮亮',
            id: 4,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'zhangliangliang'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '欧阳子成',
            id: 5,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'ouyang'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785217586',
            nickname: '张晓飞',
            id: 6,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'zhangxiaofei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '李立新',
            id: 7,
            roleNames: ['超级管理员2'],
            email: '56984523@sina.com',
            username: 'lilixin'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '张一楠',
            id: 8,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'zhangyinan'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '李晓鸥',
            id: 9,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'lixiaoou'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '任大飞',
            id: 10,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'rendafei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '王菲',
            id: 11,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'wangfei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '刘通',
            id: 12,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'liutong'
          }
        ]
      }
    }
  },
  // user list
  {
    url: '/user',
    type: 'patch',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // 修改
  {
    url: '/user/1',
    type: 'put',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // 添加
  {
    url: '/user',
    type: 'post',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // user list
  {
    url: '/user',
    type: 'patch',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // 修改
  {
    url: '/user/1',
    type: 'put',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // 添加
  {
    url: '/user',
    type: 'post',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // user list
  {
    url: '/user/page/1/10',
    type: 'get',
    response: config => {
      let data = [
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '刘海',
          id: 1,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'liuhai'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '王涛',
          id: 2,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'wangtao'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785217586',
          nickname: '李慧',
          id: 3,
          roleNames: ['超级管理员2'],
          email: '56984523@sina.com',
          username: 'lihui'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '张亮亮',
          id: 4,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'zhangliangliang'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '欧阳子成',
          id: 5,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'ouyang'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785217586',
          nickname: '张晓飞',
          id: 6,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'zhangxiaofei'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '李立新',
          id: 7,
          roleNames: ['超级管理员2'],
          email: '56984523@sina.com',
          username: 'lilixin'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '张一楠',
          id: 8,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'zhangyinan'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '李晓鸥',
          id: 9,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'lixiaoou'
        },
        {
          createUserId: 1,
          updateUserId: 1,
          updateBlueToothTime: '2020-07-08 14:38:33.000',
          updateUserName: '超级管理员',
          roles: [1],
          createUserName: '超级管理员',
          updateTime: '2020-07-08 15:01:32.712',
          avatar: {
            uname: '08803b0d39583f48206768a7534e55bc.png',
            name: '03b0d39583f48206768a7534e55bcpng.png',
            url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
          },
          authorityList: ['ROLE_ADMIN'],
          registerSource: 'SYSTEM',
          uuid: 'a50c8094c0e511eaa24300ff35fd773d',
          deleted: 'NO',
          phone: '7785216086',
          nickname: '任大飞',
          id: 10,
          roleNames: ['超级管理员2'],
          email: '752631235@163.com',
          username: 'rendafei'
        }
      ]
      if (JSON.stringify(config.query) !== '{}') {
        const { containsAll } = config.query.containsAll
        console.log(['config.query.containsAll', config.query.containsAll])
        console.log(['containsAll', containsAll])
        data = data.filter(
          row =>
            row.phone.includes(config.query.containsAll) ||
            row.email.includes(config.query.containsAll) ||
            row.nickname.includes(config.query.containsAll) ||
            row.username.includes(config.query.containsAll)
        )
        console.log('data', data)
      }
      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 0,
        totalCount: 12,
        xid: '770378si',
        data: data
      }
    }
  },
  // user list
  {
    url: '/user/page/2/10',
    type: 'get',
    response: () => {
      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 1,
        totalCount: 12,
        xid: '770378si',
        data: [
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '王菲',
            id: 11,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'wangfei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '刘通',
            id: 12,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'liutong'
          }
        ]
      }
    }
  },
  // user list
  {
    url: '/user/page/1/20',
    type: 'get',
    response: () => {
      return {
        code: 'A00000',
        message: '成功',
        rowCount: 1,
        pageCount: 0,
        totalCount: 12,
        xid: '770378si',
        data: [
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '刘海',
            id: 1,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'liuhai'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '王涛',
            id: 2,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'wangtao'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785217586',
            nickname: '李慧',
            id: 3,
            roleNames: ['超级管理员2'],
            email: '56984523@sina.com',
            username: 'lihui'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '张亮亮',
            id: 4,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'zhangliangliang'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '欧阳子成',
            id: 5,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'ouyang'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785217586',
            nickname: '张晓飞',
            id: 6,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'zhangxiaofei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '李立新',
            id: 7,
            roleNames: ['超级管理员2'],
            email: '56984523@sina.com',
            username: 'lilixin'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '张一楠',
            id: 8,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'zhangyinan'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '李晓鸥',
            id: 9,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'lixiaoou'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '任大飞',
            id: 10,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'rendafei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '王菲',
            id: 11,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'wangfei'
          },
          {
            createUserId: 1,
            updateUserId: 1,
            updateBlueToothTime: '2020-07-08 14:38:33.000',
            updateUserName: '超级管理员',
            roles: [1],
            createUserName: '超级管理员',
            updateTime: '2020-07-08 15:01:32.712',
            avatar: {
              uname: '08803b0d39583f48206768a7534e55bc.png',
              name: '03b0d39583f48206768a7534e55bcpng.png',
              url: 'http://127.0.0.1:8080/files/user/08803b0d39583f48206768a7534e55bc.png'
            },
            authorityList: ['ROLE_ADMIN'],
            registerSource: 'SYSTEM',
            uuid: 'a50c8094c0e511eaa24300ff35fd773d',
            deleted: 'NO',
            phone: '7785216086',
            nickname: '刘通',
            id: 12,
            roleNames: ['超级管理员2'],
            email: '752631235@163.com',
            username: 'liutong'
          }
        ]
      }
    }
  },
  // user list
  {
    url: '/user',
    type: 'patch',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // 修改
  {
    url: '/user/1',
    type: 'put',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  },
  // 添加
  {
    url: '/user',
    type: 'post',
    response: () => {
      return {
        code: 'A00000',
        message: '成功'
      }
    }
  }
]

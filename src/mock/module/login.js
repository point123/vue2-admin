export function login() {
    return {
        isOpen: true,
        url: "http://localhost:8081/login",
        type: "post",
        data: {
            'msg':'success',
            'code': 200,
            'data': {
                'token': "123456789",
            }
        },
        isValid: true,
        validTemplate: {
            username: "admin",
            password: "123456",
        },
        validData: {
            code : 500,
            msg: "用户名或密码错误",
            token: "",
        }
    }
}
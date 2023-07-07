export function getUser() {
    return {
        isOpen: true,
        url: "http://localhost:8081/user",
        type: "get",
        data: {
            'msg': 'success',
            'code': '200',
            'data': {
                'id': "@increment",
                'email': "@email",
                'name': "@cname",
                'age|10-60':0,
            }
        }
    }
}
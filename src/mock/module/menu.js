export function getMenu() {
    return {
        isOpen: true,
        url: "http://localhost:8081/menu",
        type: "get",
        data: {
            'msg':'data',
            'code': '200',
            'data': {
                'id': '@increment',
                'name': '@menu',
                'order|10-20': 0,
            }
        }
    }
}
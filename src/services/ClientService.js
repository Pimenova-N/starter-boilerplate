import fetch from 'auth/FetchInterceptor'

const clientService = {}

clientService.getClients = function (params) {
  return fetch({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'get',
    params
  })
}
export default clientService
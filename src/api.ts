import axios from "axios"


export function get(url: string, queryArgs: object = {}, afterFn: Function = (result: any) => result): Promise<any> {
  const key = url + JSON.stringify(queryArgs)
  console.log('getting: ', key)
  return axios.get(url, { headers: { 'Accept': 'application/json' }, params: queryArgs, maxRedirects: 0, })
    .then(function (res) {
      console.log('api.get [' + key + ']\n', '\t', res)

      return afterFn(res?.data)
    })
}

export function post(url: string, payload: any = {}, headers: any = {}, afterFn: Function = (result: any) => result): Promise<any> {
  const key = url + JSON.stringify(payload)
  console.log('postiing ', key, headers)
  const _headers = { 'Accept': 'application/json', 'Content-Type': 'multipart/form-data', ...headers }
  console.log('headers', _headers)
  return axios.post(url, payload, { headers: _headers, maxRedirects: 0 })

    .then((res) => {

      console.log('api.post [' + key + ']\n', '\t', res)
      const result = afterFn(res?.data)
      return result
    })
    .catch((e) => console.log(e))
}




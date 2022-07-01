import instance from './config'

export function POST({ url, data, headers = {} }) {
  return instance({
    method: 'post',
    url,
    data,
    headers: { ...headers }
  })
}

export function GET({ url, headers = {} }) {
  return instance({
    method: 'get',
    url,
    headers: { ...headers }
  })
}

export function PUT({ url, data, headers = {} }) {
  return instance({
    method: 'put',
    url,
    data,
    headers: { ...headers }
  })
}

export function DELETE({ url, headers = {} }) {
  return instance({
    method: 'delete',
    url,
    headers: { ...headers }
  })
}

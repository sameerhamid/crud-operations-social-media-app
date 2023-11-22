export const useFetch = (url) => {
  let data = []
  if (method == 'get') {
    data = fetch(url).then(res => res.json()).then(data => data)
  }

  return data
}


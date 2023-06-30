export default function fetchAPI(setData, setLoading) {
  setLoading(true)
  setData([])
  fetch(import.meta.env.VITE_API_URL + '/home/conf/647f315f62cdb3a26174fc38', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      setData(data)
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
}



   
export default function fetchAPI(setData, setLoading) {
  setLoading(true)
  setData([])
  fetch(import.meta.env.VITE_API_URL + '/awards', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setData(data)
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
}

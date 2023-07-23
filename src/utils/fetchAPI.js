// import Cookies from "js-cookie"

// export default function fetchAPI(setData, setLoading, endPoint) {
//   setLoading(true)
//   setData([])
//   if (Cookies.get(endPoint)){
//     setData(JSON.parse(Cookies.get(endPoint)))
//     setLoading(false)
//   }
//   else{
//   fetch(import.meta.env.VITE_API_URL + `${endPoint}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: import.meta.env.VITE_API_TOKEN,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data)
//       setData(data)
//       Cookies.set(endPoint, JSON.stringify(data), {
//         expires : 1
//       })
//     })
//     .catch((error) => console.error(error))
//     .finally(() => setLoading(false))
// }}



import Cookies from "js-cookie"

export default function fetchAPI(setData, setLoading, endPoint) {
  setLoading(true)
  setData([])
  if (Cookies.get(endPoint)){
    setData(JSON.parse(Cookies.get(endPoint)))
    setLoading(false)
  }
  else{
  fetch(import.meta.env.VITE_API_URL + `${endPoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      Cookies.set(endPoint, JSON.stringify(data), {
        expires : 1
      })
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
}}

import { useState } from 'react'
import './styles/App.css'
import './styles/Cards.css'
// import Card from './components/card'


import Home from './Pages/Home'
import Committee from './Pages/Committee'
import ContactUs from './Pages/ContactUs'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  return (
    // <>
    //   <div>
    //     <a href='https://pixelperfect.onrender.com/' target='_blank'>
    //       <img src={pixelLogo} className='logo' alt='Vite logo' />
    //     </a>
    //   </div>
    //   <h1 className='title'>Pixel </h1>
    //   <button onClick={() => fetchAPI(setData, setLoading)}>
    //     {loading ? 'Loading...' : 'Fetch API'}
    //   </button>

    //   {!loading && (
    //     <div id='cards-wrapper' className='cards-wrapper'>
    //       {data.length > 0 ? (
    //         data.map((item) => {
    //           return <Card key={item.id} item={item} />
    //         })
    //       ) : (
    //         <>
    //           <Card
    //             single
    //             item={{
    //               id: 'default',
    //               title1: 'Click on the fetch API button above',
    //               title2: 'The fetched result will be shown here',
    //             }}
    //           />
    //         </>
    //       )}
    //     </div>
    //   )}
    //   <p className='read-the-docs'>
    //     Access the docs at{' '}
    //     <a
    //       href='https://conference.cyclic.app/api-docs'
    //       target='_blank'
    //       rel='noopener noreferrer'>
    //       <code>conference.cyclic.app/api-docs</code>
    //     </a>
    //     .
    //   </p>
    // </>

    <Routes>
      <Route path='/' element={<PageLayout />} />
      <Route index element={<Home />} />
      <Route path='/committee' element={<Committee />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
  )
}

export default App

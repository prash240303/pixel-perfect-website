import { useState } from 'react'
import pixelLogo from '/pixel-white.svg'
import './styles/App.css'
import './styles/Cards.css'
import Card from './components/card'
import fetchAPI from './utils/fetchAPI'

function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  return (
    <>
      <div>
        <a href='https://pixelperfect.onrender.com/' target='_blank'>
          <img src={pixelLogo} className='logo' alt='Vite logo' />
        </a>
      </div>
      <h1 className='title'>Pixel Perfect</h1>
      <button onClick={() => fetchAPI(setData, setLoading)}>
        {loading ? 'Loading...' : 'Fetch API'}
      </button>

      {!loading && (
        <div id='cards-wrapper' className='cards-wrapper'>
          {data.length > 0 ? (
            data.map((item) => {
              return <Card key={item.id} item={item} />
            })
          ) : (
            <>
              <Card
                single
                item={{
                  id: 'default',
                  title1: 'Click on the fetch API button above',
                  title2: 'The fetched result will be shown here',
                }}
              />
            </>
          )}
        </div>
      )}
      <p className='read-the-docs'>
        Access the docs at{' '}
        <a
          href='https://conference.cyclic.app/api-docs'
          target='_blank'
          rel='noopener noreferrer'>
          <code>conference.cyclic.app/api-docs</code>
        </a>
        .
      </p>
    </>
  )
}

export default App

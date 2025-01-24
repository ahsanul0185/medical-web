import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'

const App = () => {

  const apiUrl = import.meta.env.VITE_API_URL;

  console.log(apiUrl)

  return (
    <div>
      <Header />
      <Hero />
      <p className='text-5xl'>Hello : api key is = {apiUrl}</p>
    </div>
  )
}

export default App
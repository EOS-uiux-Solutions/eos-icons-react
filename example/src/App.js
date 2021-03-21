import React from 'react'

import { EosIcon } from 'eos-icons-react'
import 'eos-icons-react/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <h1>I am using - </h1>
      <EosIcon name='android' size={60} />
      <h1>Eos Icons React Library</h1>
    </div>
  )
}

export default App

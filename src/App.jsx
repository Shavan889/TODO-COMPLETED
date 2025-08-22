import React, { useState } from 'react'
import Create from './Components/Create';
import Read from './Components/Read';
import { nanoid } from 'nanoid';

const App = () => {
  return (
    <div className='flex p-10 text-white w-screen h-screen bg-gray-700 '>
      <Create />
      <Read />
    </div>
  )
}

export default App

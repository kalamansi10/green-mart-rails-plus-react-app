import React, { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const count = () => {setCounter(prevcounter => prevcounter + 1)}

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={count}>counter</button>
    </>
  )
}

export default App

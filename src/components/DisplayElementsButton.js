import React, {useState} from 'react'

const DisplayElementsButton = () => {
    const [show, setShow] = useState(true)
  return (
    <button 
        className='display-button'
        onClick={() => setShow(!show)}>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
            <span>Continuar</span>
        </button>
  )
}

export default DisplayElementsButton
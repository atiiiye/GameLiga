import React  from 'react'

const modalContext= React.createContext({
    show:[],
    setShow :()=>{}
})

export default modalContext;
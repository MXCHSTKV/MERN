import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<div>This is React Router 6</div>} />
                <Route path='/test' element={<div>This is TEST</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Root
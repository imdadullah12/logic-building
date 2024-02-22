'use client'

import React, { useState } from 'react'
import Settings from './components/Settings'
import Canvas from './components/Canvas'

const Quotes = () => {
    const [canvasData, setCanvasData] = useState({})

    return (
        <div className='flex flex-col md:flex-row'>
            <Settings setCanvasData={setCanvasData} />
            <Canvas setCanvasData={setCanvasData} canvasData={canvasData} />
        </div>
    )
}

export default Quotes

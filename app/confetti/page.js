'use client'
import React from 'react'
import BatiJoltase from 'react-confetti'

const Confetti = () => {
    return (
        <>
            <div className='w-screen p-5 h-screen flex justify-center items-center'>
                <BatiJoltase
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ zIndex: -99 }}
                />
                <div className="card backdrop-blur-md rounded-2xl border border-white">
                    <h1 className='text-6xl px-7 py-[80px]'>Imdad is a good teacher</h1>
                </div>
            </div>
        </>
    )
}

export default Confetti

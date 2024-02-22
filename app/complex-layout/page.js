import React from 'react'

const Complex = () => {
    return (
        <>
            <div className='w-[60%] h-screen p-5 space-y-5'>
                <div className="w-full h-full flex gap-5">
                    <div className="w-[67%] h-full bg-red-300"></div>
                    <div className="w-[33%] h-full flex flex-col gap-5">
                        <div className="h-[50%] bg-blue-500"></div>
                        <div className="h-[50%] bg-blue-800"></div>
                    </div>
                </div>
                <div className="w-full h-[50%] flex gap-5">
                    <div className="w-full h-full bg-red-300"></div>
                    <div className="w-full h-full bg-red-300"></div>
                    <div className="w-full h-full bg-red-300"></div>
                </div>
            </div>
        </>
    )
}

export default Complex

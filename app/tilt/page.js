'use client'
import Image from 'next/image'
import React from 'react'
import { Tilt } from 'react-tilt'
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Terminal } from 'lucide-react'

const ReactTiltPractice = () => {

    const defaultOptions = {
        reverse: true,
        max: 100,
        scale: 1.1,
        speed: 1000,
        perspective: 3000,
        reset: true,
    }

    return (
        <div className='w-screen p-5 h-scree flex justify-center items-center'>
            {/* <Tilt options={defaultOptions}>
                <Image src={'/developer-1.png'} width={400} height={400} alt='Dev' />
            </Tilt> */}

            <Tilt options={defaultOptions}>
                <div className="h-[400px] w-[400px] bg-zinc-800 rounded-2xl flex justify-center items-center">
                    <h1 className='font-bold text-2xl' style={{
                        transform: 'translateZ(60px)',
                    }}>Hi there</h1>
                </div>
            </Tilt>

            <Tilt
                className="flex h-[300px] w-[300px] content-center items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
                style={{
                    boxShadow: '0 48px 60px 0 rgba(2,14,26,.24)',
                    transformStyle: 'preserve-3d',
                }}
            >
                <div style={{
                    transform: 'translateZ(60px)',
                }}>
                    <span className="text-2xl" role="img" aria-label="alien">Hi there</span>
                </div>
            </Tilt>
        </div>
    )
}

export default ReactTiltPractice

'use client'
import React, { useEffect, useState } from 'react'
import '@splidejs/react-splide/css';
import { Splide as Carousel, SplideSlide } from '@splidejs/react-splide';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from 'next/image';



const Splide = () => {

    const [states, setStates] = useState([]);

    const getData = async () => {
        const request = await fetch('https://api.scordemy.in/web-api/public/api/website/states');
        const response = await request.json();
        setStates(response.states)
    }

    useEffect(() => {
        getData()
    }, [])

    const splideOptions = {
        type: "loop",
        drag: "free",
        focus: "center",
        arrows: false,
        rewind: true,
        gap: "1em",
        perPage: 5,
        direction: "rtl",
        pauseOnHover: true,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            640: {
                perPage: 2,
            },
        },
        autoScroll: {
            pauseOnHover: true,
            speed: 1,
            interval: 3000, // Set the interval for auto-scroll in milliseconds.
        },
    };

    return (
        <div className="">
            <div>
                <Carousel aria-label="My Favorite Images" options={splideOptions} extensions={{ AutoScroll }}>
                    {states?.map((item, index) => (
                        <SplideSlide key={index}>
                            <Card >
                                <CardHeader className="p-3">
                                    <Image src={'https://panel.scordemy.in/' + item.image} width={300} height={300} className='h-[300px] w-full object-cover rounded-2xl' />
                                    <CardTitle className="text-center">{item.name}</CardTitle>
                                    <CardDescription className="text-center">{item.language}</CardDescription>
                                </CardHeader>
                            </Card>
                        </SplideSlide>
                    ))}
                </Carousel>
            </div>
            <iframe src="https://imdos.in" width="600" height="450" ></iframe>
        </div>
    )
}

export default Splide

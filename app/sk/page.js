'use client'
import React, { useState } from 'react'

const Dropdown = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    console.log(selectedItem);
    const dataset = [
        {
            title: 'Frontend',
            techs: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Backend',
            techs: ['PHP', 'NodeJS', 'Python']
        },
        {
            title: 'MERN Stack',
            techs: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS']
        },
        {
            title: 'LAMP Stack',
            techs: ['Linux', 'Apache', 'MySQL', 'PHP']
        }
    ]

    return (

        <div className='m-5'>
            <select name="" id="" className='w-[300px] px-2 py-5 bg-zinc-700' onChange={(e) => setSelectedItem(dataset[e.target.value].techs)}>
                <option value="">Select</option>
                {dataset.map((item, index) => (
                    <option value={index} key={index}>{item.title}</option>
                ))}
            </select>

            {selectedItem && (
                <select name="" id="" className='w-[300px] px-2 py-5 bg-zinc-700' >
                    {selectedItem.map((item, index) => (
                        <option value={index} key={index}>{item}</option>
                    ))}
                </select>
            )}

        </div>
    )
}

export default Dropdown

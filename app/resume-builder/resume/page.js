import React from 'react'
import ResumeLeft from '../components/ResumeLeft'
import ResumeRight from '../components/ResumeRight'

const Resume = ({ data }) => {
    return (
        <div className='flex bg-white text-black'>
            <ResumeLeft data={data} />
            <ResumeRight data={data} />
        </div>
    )
}

export default Resume

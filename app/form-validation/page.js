import React from 'react'
import FormComponent from './components/Form'

const Form = () => {
    return (
        <div className='m-3 bg-zinc-700 w-full md:w-[30%] p-4 rounded-2xl'>
            <h1 className='text-2xl font-bold'>Form validation with ZOD</h1>
            <FormComponent />
        </div>
    )
}

export default Form

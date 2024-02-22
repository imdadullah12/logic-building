'use client'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Swal from 'sweetalert2'
import Secret from './components/Secret'
import clsx from 'clsx'

const SecretCalculator = () => {

    const [input, setInput] = useState("");
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        const secretKey = localStorage.getItem('secret_key');

        if (!secretKey) {
            Swal.fire({
                title: "Set a secret key",
                text: "Your secret key is not set yet",
                icon: "warning",
                confirmButtonText: "Set Key"
            }).then(function (res) {
                if (res.isConfirmed) {
                    Swal.fire({
                        title: "Set Your Key",
                        input: "password",
                        showCancelButton: false,
                        confirmButtonText: "Save",
                        preConfirm: async (key) => {
                            localStorage.setItem('secret_key', key)
                            Swal.fire({
                                icon: "success",
                                title: "Success",
                                text: "Key is set!",
                            });
                        },
                    })
                }
            });
        }
    }, [])

    return (
        <div className={clsx('bg-[#1c2028]', validated ? 'flex justify-center items-center' : 'w-screen h-screen flex justify-center items-center')}>
            {validated ? (
                <Secret />
            ) : (
                <div className="w-[410px] relative h-[95%] bg-[#1c2028] border rounded-md border-[#fff] p-5">
                    <Header />
                    <div className="inputs h-[100px] mt-3 relative">
                        <input type="text" value={input} className='bottom-0 absolute w-full px-3 py-4 bg-[#1c2028] outline-none text-4xl text-right' />
                    </div>
                    <div className="bottom-5 absolute">
                        <div className="grid grid-cols-4 gap-4">
                            <Button text={'%'} color={'#6e97e7'} input={input} setInput={setInput} />
                            <Button text={'AC'} color={'#6e97e7'} input={input} setInput={setInput} />
                            <Button text={'C'} color={'#6e97e7'} input={input} setInput={setInput} />
                            <Button text={'Backspace'} color={'#6e97e7'} input={input} setInput={setInput} />
                            <Button text={'7'} input={input} setInput={setInput} />
                            <Button text={'8'} input={input} setInput={setInput} />
                            <Button text={'9'} input={input} setInput={setInput} />
                            <Button text={'/'} color={'#6e97e7'} input={input} setInput={setInput} />
                            <Button text={'4'} input={input} setInput={setInput} />
                            <Button text={'5'} input={input} setInput={setInput} />
                            <Button text={'6'} input={input} setInput={setInput} />
                            <Button text={'X'} color={'#6e97e7'} input={input} setInput={setInput} />
                            <Button text={'1'} input={input} setInput={setInput} />
                            <Button text={'2'} input={input} setInput={setInput} />
                            <Button text={'3'} input={input} setInput={setInput} />
                            <Button text={'-'} color={'#6e97e7'} input={input} setInput={setInput} />
                            <Button text={'0'} input={input} setInput={setInput} />
                            <Button text={'.'} input={input} setInput={setInput} />
                            <Button text={'='} bg={'#1c75ff'} input={input} setInput={setInput} validated={validated} setValidated={setValidated} />
                            <Button text={'+'} color={'#6e97e7'} input={input} setInput={setInput} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SecretCalculator

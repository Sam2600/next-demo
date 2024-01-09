"use client"

import React, { useState } from 'react'

const ClientPage = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => setCount(count + 1);

    return (
        <div className='flex flex-col gap-5 justify-center items-center my-10 rounded-lg shadow-lg p-10 m-5 mx-auto text-center bg-slate-200 text-black w-7/12'>
            <h1 className='text-xl p-2'> Hello This is Client Page</h1>
            <p> Totoal Count: <b>{count}</b></p>
            <button
                onClick={handleCount}
                className='p-2 w-3/12 mx-auto border rounded-md text-black border-black shadow-sm bg-white hover:border-white hover:bg-black hover:text-white'>
                Add Count
            </button>
        </div>
    )
}

export default ClientPage;
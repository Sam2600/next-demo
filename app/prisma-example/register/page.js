import React from 'react'
import Link from 'next/link';
import actions from "@/utils/actions";

const RetisterPage = () => {

    const submitTask = async (formData) => {

        "use server"

        const task = formData.get('condent');

        await actions.addTask(task);

    }

    return (
        <div className='w-4/12 mx-auto'>
            <form action={submitTask} className='w-full flex flex-col gap-4 justify-between'>
                <div className='w-full'>
                    <div className="label">
                        <span className="label-text font-semibold text-base-200">Add you task</span>
                    </div>
                    <input
                        type="text"
                        name='condent'
                        placeholder="Enter task"
                        className="input bg-white border shadow-md border-base-100 focus:bg-slate-200 focus:border-base-300 focus:text-black input-bordered w-full" />
                </div>
                <div className='w-auto flex flex-row gap-4'>
                    <button type='submit' className="btn btn-outline btn-success">Submit</button>
                    <Link href="/prisma-example" className="btn btn-outline">Back to List</Link>
                </div>
            </form>
        </div>
    )
}

export default RetisterPage
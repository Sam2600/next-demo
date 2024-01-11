import React from 'react'
import actions from '@/utils/actions';
import Link from 'next/link';

const EditPage = async ({ params }) => {

    const { id } = params;

    const toUpdateTask = await actions.getTaskById(id);

    const handleUpdate = async (formData) => {
        "use server"

        const payload = {
            condent: formData.get('condent'),
            completed: formData.get('completed')
        }

        await actions.updateTask(id, payload);
    };

    return (
        <div className='w-4/12 mx-auto'>
            <form action={handleUpdate} className='w-full flex flex-col gap-4 justify-between'>
                <div className='w-full'>
                    <div className="label">
                        <span className="label-text font-semibold text-base-200">Update your task</span>
                    </div>
                    <input
                        defaultValue={toUpdateTask.condent}
                        type="text"
                        name='condent'
                        placeholder="Enter task"
                        className="input bg-white border shadow-md border-base-100 focus:bg-slate-200 focus:border-base-300 focus:text-black input-bordered w-full" />
                </div>
                <div className="form-control w-52">
                    <label className="cursor-pointer label">
                        <span className="label-text text-base-100">Completed?</span>
                        <input type="checkbox" className="toggle toggle-accent" name='completed' defaultChecked={toUpdateTask.completed ? true : false} />
                    </label>
                </div>
                <div className='w-auto flex flex-row gap-4'>
                    <button type='submit' className="btn btn-outline btn-success">Update</button>
                    <Link href="/prisma-example" className="btn btn-outline">Back to List</Link>
                </div>
            </form>
        </div>
    )
}

export default EditPage
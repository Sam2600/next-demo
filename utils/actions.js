import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

const getTasks = async () => {

    const tasks = await prisma.task.findMany({
        orderBy: {
            created_at: "desc"
        }
    });

    return tasks;
}

const addTask = async (task) => {

    await prisma.task.create({
        data: {
            condent: task,
        }
    });

    revalidatePath("/prisma-example");
}

const deleteTask = async (id) => {

    await prisma.task.delete({
        where: {
            id: id
        }
    });

    revalidatePath("/prisma-example");

}

const getTaskById = async (id) => {

    const task = await prisma.task.findUnique({
        where: {
            id: id
        }
    });

    return task;

}

const updateTask = async (id, data) => {



    await prisma.task.update({

        where: {
            id: id
        },

        data: {
            condent: data.condent,
            completed: data.completed ? true : false
        }
    });

    revalidatePath("/prisma-example");
}

export default {
    getTasks,
    addTask,
    deleteTask,
    getTaskById,
    updateTask
}
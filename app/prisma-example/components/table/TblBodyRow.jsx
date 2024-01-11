"use server";

import React from "react";
import actions from "@/utils/actions";
import DeleteForm from "../deleteForm/DeleteForm";
import { checkStatus, toHumanDate } from "../../functions/common";
import Link from "next/link";

export const TblBodyRow = async () => {
  // get all task from db
  const tasksFromDb = await actions.getTasks();

  const tasks = tasksFromDb.map((task, index) => {
    // Changing the alien date format into human readable date
    const formattedDate = toHumanDate(task.created_at);
    // check status
    const status = checkStatus(task.completed);

    return (
      <tr key={task.id} className="">
        <th>{index + 1}</th>
        <td>{task.condent}</td>
        <td className={`${status.state ? "text-green-600" : "text-red-600"}`}>
          {status.status}
        </td>
        <td>{formattedDate}</td>
        <td className="flex flex-row gap-3">
          <Link
            href={`/prisma-example/${task.id}`}
            className="btn btn-sm btn-outline btn-primary"
          >
            Edit
          </Link>
          <DeleteForm id={task.id} />
        </td>
      </tr>
    );
  });

  return <tbody>{tasks}</tbody>;
};

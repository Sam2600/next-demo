import React from "react";
import actions from "@/utils/actions";

const DeleteForm = ({ id }) => {
  // handle delete
  const deleteTask = async (formData) => {
    "use server";

    const id = formData.get("id");
    await actions.deleteTask(id);
  };

  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-sm btn-outline btn-error">Delete</button>
    </form>
  );
};

export default DeleteForm;

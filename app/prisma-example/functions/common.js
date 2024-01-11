export const toHumanDate = (alienDate) => {

    const date = new Date(alienDate);
    const formattedDate = date.toLocaleString();

    return formattedDate;
}

export const checkStatus = (status) => {
    return status ? { state: true, status: "Completed" } : { state: false, status: "Not Yet" };
}
export const fetchDrinks = async (url) => {

    const response = await fetch(url);

    // for dev and testing
    if (!response.ok) {
        throw new Error("There is an error fetching data");
    }

    const data = await response.json();
    return data;
} 
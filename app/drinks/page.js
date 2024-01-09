import React from 'react';
import Link from 'next/link';
import { drinks_url } from "./commons/url";
import { fetchDrinks } from './commons/common';
import { DrinkCard } from './components/DrinkCard';

const checkStrLength = (str) => {
    return str.length > 40 ? str.slice(0, 40) + " ..." : str;
}

const DrinkPage = async () => {

    const fetchedDrinks = await fetchDrinks(drinks_url);

    const drinks = fetchedDrinks.drinks.map(drink => {

        // check length and cut if needed
        const instruction = checkStrLength(drink?.strInstructions);

        {/** bg-base-100 */ }
        return (
            <DrinkCard drink={drink} instruction={instruction} key={drink.idDrink} />
        )
    })

    return (
        <div className='flex flex-col gap-5 justify-center items-center my-10 rounded-lg shadow-lg p-10 m-5 mx-auto text-center bg-slate-200 text-black'>
            <h1 className='text-2xl p-2'> Welcome to Kalaw Bar </h1>
            <div className='flex flex-row justify-evenly gap-3 flex-wrap'>
                {drinks}
            </div>
        </div>
    )
}

export default DrinkPage;
import React from 'react';
import Link from 'next/link';
import { fetchDrinks } from '../commons/common';
import { drink_by_id_url } from '../commons/url';

const DrinkById = async ({ params }) => {

    const { id } = params;

    // change into number ID
    const parsedID = parseInt(id);

    // binding url and query param
    const url = `${drink_by_id_url}${parsedID}`;

    const fetchedDrink = await fetchDrinks(url);

    // static with zero because it returns as array and there will be always 1 element
    const drink = fetchedDrink?.drinks[0];

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="max-h-60"><img src={drink?.strDrinkThumb} alt="Drink" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{drink?.strCategory}</h2>
                    <p>{drink?.strInstructions}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            <Link href="/drinks">Back To List</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinkById;
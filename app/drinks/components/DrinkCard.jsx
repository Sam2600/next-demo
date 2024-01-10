import Image from "next/image";
import Link from "next/link";
import React from "react";

export const DrinkCard = ({ drink, instruction }) => {
  return (
    <div className="card card-compact w-80 my-7 bg-white border shadow-xl">
      <figure className="max-h-60">
        <Image
          src={drink?.strDrinkThumb}
          width={500}
          height={500}
          alt="Drink"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{drink?.strCategory}</h2>
        <p>{instruction}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link href={`/drinks/${drink.idDrink}`}>Check Detail</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

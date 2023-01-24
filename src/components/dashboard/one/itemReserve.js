import { Str_a_Int } from "../../../helpers/formatDate";
import { useEffect, useState } from "react";

const ItemReserve = (props) => {  

  let date = new Date(
    Date.UTC(props.dateInt[0], props.dateInt[1] , props.dateInt[2] )
  );
  let dateStr = date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span class="font-semibold title-font text-white">{props.hour}:00</span>
        <span class="mt-1 text-gray-500 text-sm">{dateStr}</span>
      </div>
      <div class="md:flex-grow">
        <h2 class="text-2xl font-medium text-white title-font mb-2">
          Hola {props.name}
        </h2>
        <p class="leading-relaxed">
          Le hace recordar que tiene una reservacion programada para el {dateStr}, recuerde que el tiempo de la reunion es de 1 hora aproximadamente
        </p>
        <a class="text-pink-600 inline-flex items-center mt-4">
          Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      {}
    </div>
  );
};

export default ItemReserve;

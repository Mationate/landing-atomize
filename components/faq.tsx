"use client"
import { useState } from "react";
import data from "@/public/data.json";
import FaqAccordion from "./faq-accordion";

export default function FaqPage() {

    const [active, setActive] = useState([false, false, false, false, false]);
    const isSomeActive = active.some((element) => element);
    const handleClick = () => {
      isSomeActive
        ? setActive([false, false, false, false,false])
        : setActive([true, true, true, true, true, true]);
    };
  
    return ( 
        <div className='grid place-items-center w-full'>
            <FaqAccordion
                handleClick={handleClick}
                isSomeActive={isSomeActive}
                data={data}
                turn={active}
                setTurn={setActive}
            />
        </div>
     );
}
 
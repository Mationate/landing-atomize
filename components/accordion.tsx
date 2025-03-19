import { ArrowDown } from 'lucide-react'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:"0px"
        }

    },[contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }
  return (
    <div className='w-full'>
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full p-5 mx-4 bg-gray-100 hover:bg-gray-200 transition duration-200 shadow-md cursor-pointer"
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <ArrowDown
          size={24}
          className={`transform transition-transform duration-200 text-black ${turn[idx] ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-500 ${turn[idx] ? 'max-h-screen' : 'max-h-0'}`}
        style={{ maxHeight: turn[idx] ? contentRef.current!.scrollHeight : 0 }}
      >
        <p className="p-5 text-gray-300 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg">{answer}</p>
      </div>
    </div>
    
  )
}

export default Accordion
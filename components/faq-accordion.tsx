import React, { Dispatch, SetStateAction } from 'react'
import { ArrowBigDown } from 'lucide-react';
import Accordion from './accordion';

type Props = {
    question :string,
    answer: string,
    idx: number
}

interface FaqAccordionProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

const FaqAccordion = ({data, turn, setTurn}:FaqAccordionProps) => {
  return (
    <div className="py-12">
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <div className="mx-auto mb-12 max-w-[520px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Preguntas frecuentes
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
              ¿Tienes dudas?
            </h2>
          </div>
        </div>
      </div>

    <div className="max-w-4xl mx-auto space-y-4">
      {data.map((el, i) => (
        <div key={`question-${i}`} className="w-full">
          <Accordion
            question={el.question}
            answer={el.answer}
            turn={turn}
            setTurn={setTurn}
            idx={el.idx}
          />
        </div>
      ))}
    </div>
  </div>
);

}

export default FaqAccordion
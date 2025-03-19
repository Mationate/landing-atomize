"use client"
import { cn } from '@/lib/utils';
import React, { ChangeEvent } from 'react'

  const subscriptionTypes = [
    { type: 'Mes' },
    { type: 'Trimestre' },
    { type: 'Semestre' },
    { type: 'Anual' },
  ];
  
  interface PeriodRadioButtonsProps {
    subscriptionType: string;
    handleSubscriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const PeriodRadioButtons: React.FC<PeriodRadioButtonsProps> = ({ subscriptionType = 'Mes', handleSubscriptionChange }) => {
    return (
      <div className="flex justify-center">
        <div className="mb-2 inline-flex overflow-hidden border border-gray-400 rounded-lg">
          {subscriptionTypes.map(({ type }) => (
            <label key={type} htmlFor={type} className="cursor-pointer">
              <input
                type="radio"
                name="subscriptionType"
                id={type}
                value={type}
                className="sr-only peer"
                checked={subscriptionType === type}
                onChange={handleSubscriptionChange}
              />
              <span className={cn(
                "relative inline-flex items-center h-full py-2 pr-3 space-x-2 text-sm pl-7",
                `peer-checked:bg-color3bs`,
                { 'text-white': subscriptionType === type }
              )}>
                <span className={cn(
                  " before:w-2 before:h-2 before:rounded-full before:absolute before:top-[14px] before:left-3",
                { 'before:bg-white text-white': subscriptionType === type, 'before:bg-black dark:text-white': subscriptionType !== type }
                )}>
                  {type}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>
    )
  }

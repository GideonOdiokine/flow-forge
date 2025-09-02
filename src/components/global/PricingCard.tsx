import React from 'react'
import { CardBody, CardContainer, CardItem } from './3d-card'
import { CheckIcon } from 'lucide-react'

function PricingCard({ title, price, features }: { title: string, price: string, features: string[] }) {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="relative w-full md:w-[350px] rounded-xl p-6 border bg-gray-50 dark:bg-black dark:border-white/[0.2] group/card">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
          <h2 className="text-6xl">{price}</h2>
        </CardItem>
        <CardItem translateZ="60" className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
          <ul className="my-4 flex flex-col gap-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckIcon /> {f}
              </li>
            ))}
          </ul>
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem as="button" translateZ={20} className="px-4 py-2 text-xs rounded-xl dark:text-white">
            Try now →
          </CardItem>
          <CardItem as="button" translateZ={20} className="px-4 py-2 text-xs font-bold rounded-xl bg-black dark:bg-white dark:text-black text-white">
            Get Started Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default PricingCard

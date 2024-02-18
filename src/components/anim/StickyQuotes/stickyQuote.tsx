'use client'

import { MotionValue, motion, useTransform } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect } from 'react'

import { cn} from "@/lib/utils"

interface Props {
  quote: string
  quoteIndex: number
  range: [number, number]
  animIndex: number
  setAnimIndex: Dispatch<SetStateAction<number>>
  progress: MotionValue<number>
}

export default function StickyQuote({
  quote,
  quoteIndex,
  setAnimIndex,
  animIndex,
  range,
  progress,
}: Props) {
  const opacity = useTransform(
    progress,
    range,
    // * To the first only disappear
    quoteIndex === 0 ? [1, 0] : [0, 1],
  )

  useEffect(() => {
    opacity.on('change', () => setAnimIndex(quoteIndex + 1))
  }, [opacity, quoteIndex, setAnimIndex])


  return (
    <motion.span
      style={{
        opacity,
        display: animIndex - 1 === quoteIndex ? 'inline-block' : 'none',
      }}
      className={cn(
        "text-white",
        quoteIndex === 0 ? "text-7xl" : "text-lg font-normal"
      )
      }
    >
      {quote}
    </motion.span>
  )
}

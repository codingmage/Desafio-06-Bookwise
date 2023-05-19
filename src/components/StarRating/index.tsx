import { Star } from '@phosphor-icons/react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface StarRatingProps {
  disabled?: boolean
  size?: number
}

export function BookRating({ disabled, size = 20 }: StarRatingProps) {
  const [userRating, setUserRating] = useState<number>(0)

  const hasUserRating = userRating !== 0

  const averageRating = 2.5

  const [rating, setRating] = useState(0)

  // Catch Rating value
  function handleRating(rate: number) {
    setRating(rate)

    // other logic
  }

  return (
    <Rating
      onClick={handleRating}
      initialValue={averageRating}
      transition
      allowFraction
      SVGstorkeWidth={1}
      SVGstrokeColor="#8381D9"
      fillColor="#8381D9"
      emptyColor="transparent"
      readonly={disabled}
      size={size}

      /* Available Props */
    />
  )
}

import { Check, Star, X } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import {
  Rating,
  FormContainer,
  UserReviewText,
  FormHeader,
  FormButtonContainer,
  FormButton,
} from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newUserReviewSchema = z.object({
  userReview: z.string(),
})

type NewUserReviewData = z.infer<typeof newUserReviewSchema>

export function UserReviewForm() {
  const { register, handleSubmit } = useForm<NewUserReviewData>({
    resolver: zodResolver(newUserReviewSchema),
  })

  async function handleNewUserReview(data: NewUserReviewData) {
    console.log(data)
  }

  return (
    <FormContainer as="form" onSubmit={handleSubmit(handleNewUserReview)}>
      <FormHeader>
        <div>
          <Avatar size="medium" />
          <span>Jean Fellipe</span>
        </div>
        <Rating>
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
        </Rating>
      </FormHeader>
      <UserReviewText
        placeholder="Escreva sua avaliação"
        maxLength={450}
        {...register('userReview')}
      />
      <FormButtonContainer>
        <FormButton type="reset" buttonType={'cancel'}>
          <X size={24} />
        </FormButton>
        <FormButton type="submit" buttonType={'confirm'}>
          <Check size={24} />
        </FormButton>
      </FormButtonContainer>
    </FormContainer>
  )
}

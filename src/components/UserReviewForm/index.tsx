import { Check, X } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import {
  FormContainer,
  UserReviewText,
  FormHeader,
  FormButtonContainer,
  FormButton,
  FormFooter,
} from './styles'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Rating } from '@smastrom/react-rating'
import { customStyles } from '@/styles/global'
import { api } from '@/lib/axios'

const newUserReviewSchema = z.object({
  userReviewText: z
    .string()
    .regex(/^[^-\s]/, {
      message: 'Sua review precisa ter no mínimo 3 caracteres.',
    })
    .min(3, { message: 'Sua review precisa ter no mínimo 3 caracteres.' }),
  userRating: z
    .number()
    .min(1, { message: 'Sua review precisa ter uma nota.' }),
})

type NewUserReviewData = z.infer<typeof newUserReviewSchema>

export function UserReviewForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isValid, errors, isSubmitting },
  } = useForm<NewUserReviewData>({
    resolver: zodResolver(newUserReviewSchema),
  })

  async function handleNewUserReview(data: NewUserReviewData) {
    try {
      await api.post('/rating', {
        rate: data.userRating,
        description: data.userReviewText,
        user: 'Jean Fellipe',
        book: 'Conde de Monte Cristo',
      })
    } catch (err) {
      console.log(err)
    }
  }

  const noRating = !isValid

  function handleStarReset() {
    setValue('userRating', 0)
  }

  return (
    <FormContainer as="form" onSubmit={handleSubmit(handleNewUserReview)}>
      <FormHeader>
        <div>
          <Avatar size="medium" />
          <span>Jean Fellipe</span>
        </div>
        <Controller
          control={control}
          name="userRating"
          /*           rules={{
            validate: (rating) => rating > 0,
          }} */
          render={({ field }) => (
            <Rating
              style={{ maxWidth: 200 }}
              value={field.value}
              onChange={field.onChange}
              visibleLabelId="userRating"
              itemStyles={customStyles}
              className="starStyle"
            />
          )}
        />

        {/*         <Rating
          onClick={handleRating}
          initialValue={rating}
          transition
          allowFraction
          SVGstorkeWidth={1}
          SVGstrokeColor="#8381D9"
          fillColor="#8381D9"
          emptyColor="transparent"
          size={32}
        /> */}
      </FormHeader>
      <UserReviewText
        placeholder="Escreva sua avaliação"
        maxLength={450}
        required
        {...register('userReviewText')}
      />
      <FormFooter>
        <span>
          {errors.userReviewText ? errors.userReviewText.message : ''}{' '}
          {errors.userRating ? errors.userRating.message : ''}
        </span>
        <FormButtonContainer>
          <FormButton
            type="reset"
            buttonType={'cancel'}
            onClick={handleStarReset}
          >
            <X size={24} />
          </FormButton>
          <FormButton
            type="submit"
            buttonType={'confirm'}
            disabled={noRating || isSubmitting}
          >
            <Check size={24} />
          </FormButton>
        </FormButtonContainer>
      </FormFooter>
    </FormContainer>
  )
}

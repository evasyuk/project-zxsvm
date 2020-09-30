/* eslint-disable no-unused-vars */
import * as Yup from 'yup'

const ALPHABET = /[a-zA-Z]+$/
const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const PHONE = /^\+(?:[0-9]?){6,14}[0-9]$/ // Regular expression matching E.164 formatted phone numbers

// TODO: intl error message
export const LoginSchema = ({ intl }) =>
  Yup.object().shape({
    email: Yup.string()
      .matches(EMAIL, 'email is not valid')
      .required('email validation required'),
    password: Yup.string()
      .min(6, ({ min }) => `password min length is ${min}`)
      .required('password validation required'),
  })

export const SignUpSchema = ({ intl }) =>
  Yup.object().shape({
    sign_up_name: Yup.string()
      .min(2, ({ min }) =>
        intl.formatMessage(
          { id: 'VALIDATION_ERRORS.NAME_MIN_LENGTH' },
          { count: min },
        ),
      )
      .max(50, ({ max }) =>
        intl.formatMessage(
          { id: 'VALIDATION_ERRORS.NAME_MAX_LENGTH' },
          { count: max },
        ),
      )
      .matches(
        ALPHABET,
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.NAME_ONLY_ALPHABET',
        }),
      )
      .required(intl.formatMessage({ id: 'VALIDATION_ERRORS.NAME_REQUIRED' })),
    sign_up_phone: Yup.string()
      .matches(
        PHONE,
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.PHONE_NUMBER_INVALID',
        }),
      )
      .required(
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.PHONE_NUMBER_REQUIRED',
        }),
      ),
    sign_up_email: Yup.string()
      .matches(
        EMAIL,
        intl.formatMessage({ id: 'VALIDATION_ERRORS.EMAIL_INVALID' }),
      )
      .required(
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.EMAIL_REQUIRED',
        }),
      ),
    sign_up_password: Yup.string()
      .min(6, ({ min }) =>
        intl.formatMessage(
          { id: 'VALIDATION_ERRORS.PASSWORD_MIN_LENGTH' },
          { count: min },
        ),
      )
      .required(
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.PASSWORD_REQUIRED',
        }),
      ),
    sign_up_confirm_password: Yup.string()
      .oneOf(
        [Yup.ref('sign_up_password')],
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.PASSWORD_NOT_MATCH',
        }),
      )
      .required(
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.CONFIRM_PASSWORD_REQUIRED',
        }),
      ),
  })

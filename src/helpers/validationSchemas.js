/* eslint-disable no-unused-vars */
import * as Yup from 'yup'

const ALPHABET = /[a-zA-Z]+$/
const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const PHONE = /^\+(?:[0-9]?){6,14}[0-9]$/ // Regular expression matching E.164 formatted phone numbers
const DELETE_ACC = /^delete account$/

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
    'sign-up-name-input': Yup.string()
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
    'sign-up-email-input': Yup.string()
      .matches(
        EMAIL,
        intl.formatMessage({ id: 'VALIDATION_ERRORS.EMAIL_INVALID' }),
      )
      .required(
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.EMAIL_REQUIRED',
        }),
      ),
    'sign-up-phone-input': Yup.string()
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
    'sign-up-password-input': Yup.string()
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
    'sign-up-confirm-password-input': Yup.string()
      .oneOf(
        [Yup.ref('sign-up-password-input')],
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

export const ChangePasswordSchema = ({ intl }) =>
  Yup.object().shape({
    password: Yup.string()
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
    passwordRepeat: Yup.string()
      .oneOf(
        [Yup.ref('password')],
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.PASSWORD_REPEAT_REQUIRED',
        }),
      )
      .required(
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.CONFIRM_PASSWORD_REQUIRED',
        }),
      ),
  })

export const DeleteAccountSchema = ({ intl }) =>
  Yup.object().shape({
    'delete-acc-input': Yup.string()
      .matches(
        DELETE_ACC,
        intl.formatMessage({ id: 'VALIDATION_ERRORS.DELETE_ACC_MISMATCH' }),
      )
      .required(
        intl.formatMessage({
          id: 'VALIDATION_ERRORS.DELETE_ACC_CONFIRMATION_REQUIRED',
        }),
      ),
  })

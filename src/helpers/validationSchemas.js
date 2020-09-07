import * as Yup from 'yup'

const ALPHABET = /[a-zA-Z]+$/
const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const LoginSchema = ({ intl }) =>
    Yup.object().shape({
        email: Yup.string()
            .matches(
                EMAIL,
                "email is not valid",
            )
            .required("email validation required"),
        password: Yup.string()
            .min(6, ({ min }) =>
                "password min length is " + min
            )
            .required(
                "password validation required"
            ),
    })
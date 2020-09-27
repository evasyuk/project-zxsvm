import React from 'react'
import { Formik } from 'formik'
import propTypes from 'prop-types'

import { LoginSchema } from '../../helpers/validationSchemas'

import { Button, Input } from '../index'

import { MobileTopWrapper } from '../styles'

const LoginForm = ({ intl, onLogin }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={LoginSchema({ intl })}
    onSubmit={(values) => onLogin(values.email, values.password)}
  >
    {({ values, errors, handleBlur, handleSubmit, handleChange, touched }) => (
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          label={intl.formatMessage({ id: 'LOG_IN.EMAIL_INPUT' })}
          value={values.email}
          type="email"
          onChange={handleChange}
          error={errors.email && touched.email ? errors.email : ''}
          onBlur={handleBlur}
          placeholder={intl.formatMessage({ id: 'LOG_IN.EMAIL_INPUT' })}
        />
        <Input
          id="password"
          type="password"
          value={values.password}
          label={intl.formatMessage({ id: 'LOG_IN.PASSWORD_INPUT' })}
          onChange={handleChange}
          error={errors.password && touched.password ? errors.password : ''}
          onBlur={handleBlur}
          placeholder={intl.formatMessage({ id: 'LOG_IN.PASSWORD_INPUT' })}
        />
        <MobileTopWrapper>
          <Button
            type="submit"
            disabled={!values.password || !values.email}
            title={intl.formatMessage({ id: 'LOG_IN.BUTTON' })}
            width="152px"
            id="loginButton"
          />
        </MobileTopWrapper>
      </form>
    )}
  </Formik>
)

LoginForm.propTypes = {
  intl: propTypes.object.isRequired,
  onLogin: propTypes.func.isRequired,
}

export default LoginForm

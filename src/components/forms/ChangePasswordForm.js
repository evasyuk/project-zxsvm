import React from 'react'
import { Formik } from 'formik'
import propTypes from 'prop-types'

import { ChangePasswordSchema } from '../../helpers/validationSchemas'

import { Button, Input } from '../index'

import { MobileTopWrapper } from '../styles'

// prettier-ignore
const ChangePasswordForm = ({ intl, onChangePassword }) => (
  <Formik
    initialValues={{ password: '', passwordRepeat: '' }}
    validationSchema={ChangePasswordSchema({ intl })}
    onSubmit={(values) => onChangePassword(values.password, values.passwordRepeat)}
  >
    {({ values, errors, handleBlur, handleSubmit, handleChange, touched }) => (
      <form onSubmit={handleSubmit}>
        <Input
          id="password"
          type="password"
          label={intl.formatMessage({ id: 'PROFILE.PASSWORD_LABEL' })}
          value={values.password}
          onChange={handleChange}
          error={errors.password && touched.password ? errors.password : ''}
          onBlur={handleBlur}
          placeholder={intl.formatMessage({ id: 'PROFILE.PASSWORD_LABEL' })}
        />
        <Input
          id="passwordRepeat"
          type="password"
          value={values.passwordRepeat}
          label={intl.formatMessage({ id: 'PROFILE.PASSWORD_REPEAT_LABEL' })}
          onChange={handleChange}
          error={errors.passwordRepeat && touched.passwordRepeat ? errors.passwordRepeat : ''}
          onBlur={handleBlur}
          placeholder={intl.formatMessage({ id: 'PROFILE.PASSWORD_REPEAT_LABEL' })}
        />
        <MobileTopWrapper>
          <Button
            id="changePwdButton"
            type="submit"
            disabled={!values.password || !values.passwordRepeat}
            title={intl.formatMessage({ id: 'PROFILE.PWD_CHANGE_BTN' })}
            width="152px"
          />
        </MobileTopWrapper>
      </form>
    )}
  </Formik>
)

ChangePasswordForm.propTypes = {
  intl: propTypes.object.isRequired,
  onChangePassword: propTypes.func.isRequired,
}

export default ChangePasswordForm

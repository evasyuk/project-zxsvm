import React from 'react'
import { Formik } from 'formik'
import propTypes from 'prop-types'

import { DeleteAccountSchema } from '../../helpers/validationSchemas'

import { Button, Input } from '../index'

import { MobileTopWrapper } from '../styles'

// prettier-ignore
const DeleteAccountForm = ({ intl, onDeleteAccount }) => (
  <Formik
    initialValues={{ text: '' }}
    validationSchema={DeleteAccountSchema({ intl })}
    onSubmit={() => onDeleteAccount()}
  >
    {({ values, errors, handleBlur, handleSubmit, handleChange, touched }) => (
      <form onSubmit={handleSubmit}>
        <Input
          id="text"
          type="password"
          label={intl.formatMessage({ id: 'PROFILE.DELETE_ACC_LABEL' })}
          value={values.text}
          onChange={handleChange}
          error={errors.text && touched.text ? errors.text : ''}
          onBlur={handleBlur}
          placeholder=""
        />
        <MobileTopWrapper>
          <Button
            id="deleteAccButton"
            type="submit"
            disabled={!values.password || !values.passwordRepeat}
            title={intl.formatMessage({ id: 'PROFILE.DELETE_ACC_BTN' })}
            width="152px"
          />
        </MobileTopWrapper>
      </form>
    )}
  </Formik>
)

DeleteAccountForm.propTypes = {
  intl: propTypes.object.isRequired,
  onDeleteAccount: propTypes.func.isRequired,
}

export default DeleteAccountForm

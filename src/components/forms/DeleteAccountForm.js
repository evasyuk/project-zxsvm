import React from 'react'
import { Formik } from 'formik'
import propTypes from 'prop-types'

import { DeleteAccountSchema } from '../../helpers/validationSchemas'

import { Button, Input } from '../index'

import { MobileTopWrapper } from '../styles'

// prettier-ignore
const DeleteAccountForm = ({ intl, onDeleteAccount }) => (
  <Formik
    initialValues={{ 'delete-acc-input': '' }}
    validationSchema={DeleteAccountSchema({ intl })}
    onSubmit={() => onDeleteAccount()}
  >
    {({ values, errors, handleBlur, handleSubmit, handleChange, touched }) => (
      <form onSubmit={handleSubmit}>
        <Input
          id="delete-acc-input"
          type="password"
          label={intl.formatMessage({ id: 'PROFILE.DELETE_ACC_LABEL' })}
          value={values['delete-acc-input']}
          onChange={handleChange}
          error={errors['delete-acc-input'] && touched['delete-acc-input'] ? errors['delete-acc-input'] : ''}
          onBlur={handleBlur}
          placeholder=""
        />
        <MobileTopWrapper>
          <Button
            id="delete-account-confirm-btn"
            type="submit"
            disabled={!values['delete-acc-input'] || errors['delete-acc-input']}
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

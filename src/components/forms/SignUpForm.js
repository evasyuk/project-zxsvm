import React from 'react'
import { Formik } from 'formik'
import propTypes from 'prop-types'

import { SignUpSchema } from '../../helpers/validationSchemas'

import { Button, Input, Checkbox, LinkButton } from '../index'

import { ButtonsWrap, AgreementWrap, AgreementInner } from './styles'

const SignUpForm = ({ intl, onSignUp, onDataProtection }) => (
  <Formik
    initialValues={{
      sign_up_name: '',
      sign_up_email: '',
      sign_up_password: '',
      sign_up_confirm_password: '',
      sign_up_phone: '',
      sign_up_agreed: false,
    }}
    validationSchema={SignUpSchema({ intl })}
    onSubmit={onSignUp}
  >
    {({ values, errors, handleSubmit, handleChange, handleBlur, touched }) => (
      <form onSubmit={handleSubmit} data-selector="sign_up-form">
        <Input
          id="sign_up_name"
          value={values.sign_up_name}
          label={intl.formatMessage({
            id: 'SIGN_UP.NAME_INPUT',
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.sign_up_name && touched.sign_up_name
              ? errors.sign_up_name
              : ''
          }
          placeholder={intl.formatMessage({
            id: 'SIGN_UP.NAME_INPUT',
          })}
        />
        <Input
          id="sign_up_email"
          value={values.sign_up_email}
          label={intl.formatMessage({
            id: 'SIGN_UP.EMAIL_INPUT',
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.sign_up_email && touched.sign_up_email
              ? errors.sign_up_email
              : ''
          }
          placeholder={intl.formatMessage({
            id: 'SIGN_UP.EMAIL_INPUT',
          })}
        />
        <Input
          id="sign_up_phone"
          value={values.sign_up_phone}
          label={intl.formatMessage({
            id: 'SIGN_UP.PHONE_NUMBER',
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.sign_up_phone && touched.sign_up_phone
              ? errors.sign_up_phone
              : ''
          }
          placeholder={intl.formatMessage({
            id: 'SIGN_UP.PHONE_INPUT',
          })}
        />
        <Input
          id="sign_up_password"
          type="password"
          value={values.sign_up_password}
          label={intl.formatMessage({
            id: 'SIGN_UP.PASSWORD_INPUT',
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.sign_up_password && touched.sign_up_password
              ? errors.sign_up_password
              : ''
          }
          placeholder={intl.formatMessage({
            id: 'SIGN_UP.PASSWORD_INPUT',
          })}
        />
        <Input
          id="sign_up_confirm_password"
          type="password"
          value={values.sign_up_confirm_password}
          label={intl.formatMessage({
            id: 'SIGN_UP.REPEAT_PASSWORD_INPUT',
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.sign_up_confirm_password && touched.sign_up_confirm_password
              ? errors.sign_up_confirm_password
              : ''
          }
          placeholder={intl.formatMessage({
            id: 'SIGN_UP.REPEAT_PASSWORD_INPUT',
          })}
        />
        <AgreementWrap>
          <Checkbox
            id="sign_up_agreed"
            checked={values.sign_up_agreed}
            onChange={handleChange}
            label={
              <AgreementInner>
                <span>
                  {intl.formatMessage({
                    id: 'SIGN_UP.TERMS_AND_AGREEMENT_LABEL',
                  })}
                  &nbsp;
                </span>
                <LinkButton
                  onClick={onDataProtection}
                  title={intl.formatMessage({
                    id: 'SIGN_UP.TERMS_AND_AGREEMENT_LINK',
                  })}
                />
              </AgreementInner>
            }
          />
        </AgreementWrap>
        <ButtonsWrap>
          <Button
            type="submit"
            fullWidth
            disabled={
              Object.values(values).some((e) => e === '') ||
              !values.sign_up_agreed
            }
            title={intl.formatMessage({
              id: 'SIGN_UP.SIGN_UP_BUTTON',
            })}
          />
        </ButtonsWrap>
      </form>
    )}
  </Formik>
)

SignUpForm.propTypes = {
  intl: propTypes.object.isRequired,
  onSignUp: propTypes.func.isRequired,
  onDataProtection: propTypes.func.isRequired,
}

export default SignUpForm

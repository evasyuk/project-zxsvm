import React from 'react'
import { Formik } from 'formik'
import propTypes from 'prop-types'

import { SignUpSchema } from '../../helpers/validationSchemas'

import { Button, Input, Checkbox, LinkButton } from '../index'

import { ButtonsWrap, AgreementWrap, AgreementInner } from './styles'

const getInput = ({
  intl,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  mId,
  intlLabelId,
  intlPlaceholderId,
}) => (
  <Input
    id={mId}
    value={values[mId]}
    label={intl.formatMessage({
      id: intlLabelId,
    })}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors[mId] && touched[mId] ? errors[mId] : ''}
    placeholder={intl.formatMessage({
      id: intlPlaceholderId,
    })}
  />
)

const SignUpForm = ({ intl, onSignUp, onDataProtection }) => (
  <Formik
    initialValues={{
      'sign-up-name-input': '',
      'sign-up-email-input': '',
      'sign-up-phone-input': '',
      'sign-up-password-input': '',
      'sign-up-confirm-password-input': '',
      'sign-up-privacy-agreed-checkbox': false,
    }}
    validationSchema={SignUpSchema({ intl })}
    onSubmit={onSignUp}
  >
    {(formikProps) => (
      <form onSubmit={formikProps.handleSubmit} data-selector="sign_up-form">
        {getInput({
          intl,
          mId: 'sign-up-name-input',
          intlLabelId: 'SIGN_UP.NAME_INPUT',
          intlPlaceholderId: 'SIGN_UP.NAME_INPUT',
          ...formikProps,
        })}
        {getInput({
          intl,
          mId: 'sign-up-email-input',
          intlLabelId: 'SIGN_UP.EMAIL_INPUT',
          intlPlaceholderId: 'SIGN_UP.EMAIL_INPUT',
          ...formikProps,
        })}
        {getInput({
          intl,
          mId: 'sign-up-phone-input',
          intlLabelId: 'SIGN_UP.PHONE_NUMBER',
          intlPlaceholderId: 'SIGN_UP.PHONE_INPUT',
          ...formikProps,
        })}
        {getInput({
          intl,
          mId: 'sign-up-password-input',
          intlLabelId: 'SIGN_UP.PASSWORD_INPUT',
          intlPlaceholderId: 'SIGN_UP.PASSWORD_INPUT',
          ...formikProps,
        })}
        {getInput({
          intl,
          mId: 'sign-up-confirm-password-input',
          intlLabelId: 'SIGN_UP.REPEAT_PASSWORD_INPUT',
          intlPlaceholderId: 'SIGN_UP.REPEAT_PASSWORD_INPUT',
          ...formikProps,
        })}
        <AgreementWrap>
          <Checkbox
            id="sign-up-privacy-agreed-checkbox"
            checked={formikProps.values['sign-up-privacy-agreed-checkbox']}
            onChange={formikProps.handleChange}
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
                  id="sign-up-privacy-policy-btn"
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
              Object.values(formikProps.values).some((e) => e === '') ||
              !formikProps.values['sign-up-privacy-agreed-checkbox']
            }
            title={intl.formatMessage({
              id: 'SIGN_UP.SIGN_UP_BUTTON',
            })}
            id="sign-up-submit-btn"
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

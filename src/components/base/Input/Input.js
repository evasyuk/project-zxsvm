import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import propTypes from 'prop-types'

import { Icon } from '../../dependent'

const INPUT_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
}

class Input extends Component {
  state = { visibilityType: this.props.type }

  onChangeType = () => {
    this.setState((state) => ({
      visibilityType:
        state.visibilityType === INPUT_TYPE.PASSWORD
          ? INPUT_TYPE.TEXT
          : INPUT_TYPE.PASSWORD,
    }))
  }

  render() {
    const {
      type,
      label,
      theme,
      iconName,
      error,
      id,
      value,
      required,
      startAdornment,
      endAdornment,
      multiline,
      height,
      onKeyDown,
      searchable,
      endAdornmentPosition,
      ...props
    } = this.props
    const { visibilityType } = this.state

    return (
      <InputWrapper>
        <LabelWrapper>
          <Label error={!!error} htmlFor={id}>
            {label}
            {required && <RequiredBlock>*</RequiredBlock>}
          </Label>
        </LabelWrapper>
        <InputContainer error={!!error} label={label} searchable={searchable}>
          {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
          {multiline ? (
            <TextareaElement
              id={id}
              type={visibilityType}
              label={label}
              value={value}
              height={height}
              onKeyDown={onKeyDown}
              {...props}
            />
          ) : (
            <InputElement
              id={id}
              type={visibilityType}
              label={label}
              value={value}
              {...props}
            />
          )}
          {type === INPUT_TYPE.PASSWORD ? (
            <InputAdornment type="button" onClick={this.onChangeType}>
              {!!value && <Icon name={iconName} color={theme.colors.gray500} />}
            </InputAdornment>
          ) : null}
          {endAdornment && (
            <EndAdornment position={endAdornmentPosition}>
              {endAdornment}
            </EndAdornment>
          )}
        </InputContainer>
        {!!error && <InputErrorArea>{error}</InputErrorArea>}
      </InputWrapper>
    )
  }
}

Input.propTypes = {
  id: propTypes.string.isRequired,
  theme: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  iconName: propTypes.string,
  value: propTypes.string,
  onBlur: propTypes.func,
  error: propTypes.string,
  required: propTypes.bool,
  startAdornment: propTypes.node,
  endAdornment: propTypes.node,
  height: propTypes.number,
  onKeyDown: propTypes.func,
  searchable: propTypes.bool,
  endAdornmentPosition: propTypes.string,
  multiline: propTypes.bool,
}

Input.defaultProps = {
  type: INPUT_TYPE.TEXT,
  label: '',
  placeholder: '',
  disabled: false,
  iconName: 'eye',
  value: '',
  error: '',
  onBlur: () => {},
  required: false,
  startAdornment: null,
  endAdornment: null,
  height: null,
  onKeyDown: () => {},
  searchable: false,
  endAdornmentPosition: 'center',
  multiline: false,
}

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const LabelWrapper = styled.div`
  display: flex;
`

const Label = styled.label`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 1.14;
  color: ${(props) =>
    props.error ? props.theme.colors.red : props.theme.colors.gray500};
  cursor: pointer;

  align-self: flex-start;
`

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: ${(props) => (props.searchable ? '0' : '4px')};
  border-left-width: ${({ searchable }) => (searchable ? '0' : '1px')};
  border-right-width: ${({ searchable }) => (searchable ? '0' : '1px')};
  border-top-width: ${({ searchable }) => (searchable ? '0' : '1px')};
  border-bottom-width: 1px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red : theme.colors.gray200};
  border-style: solid;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.white : props.theme.colors.white};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  margin-top: ${(props) => (props.label ? '8px' : 0)};
`

const InputElement = styled.input`
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) =>
    props.disabled ? props.theme.colors.gray200 : props.theme.colors.gray500};
  line-height: 1;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray300};
  }
  outline: none;
  border: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: ${(props) => props.theme.colors.white} !important;
    color: ${(props) => props.theme.colors.gray500} !important;
    box-shadow: 0 0 0 1000px ${(props) => props.theme.colors.white} inset !important;
    -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme.colors.white}
      inset !important;
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors.gray500} !important;
  }
`

const TextareaElement = styled.textarea`
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) =>
    props.disabled ? props.theme.colors.gray200 : props.theme.colors.gray500};
  line-height: 1;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray300};
  }
  outline: none;
  border: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: ${(props) => props.theme.colors.white} !important;
    color: ${(props) => props.theme.colors.gray500} !important;
    box-shadow: 0 0 0 1000px ${(props) => props.theme.colors.white} inset !important;
    -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme.colors.white}
      inset !important;
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors.gray500} !important;
  }
  resize: none;
  height: ${(props) => (props.height ? `${props.height}px` : '18px')};
`

const InputAdornment = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 22px;
`

const InputErrorArea = styled.p`
  width: 100%;
  margin: 4px 0 0;
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.red};
  line-height: 1;
`

const RequiredBlock = styled.span`
  align-self: flex-start;
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.sm};
`

const Adornment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StartAdornment = styled(Adornment)`
  margin-right: 10px;
`

const EndAdornment = styled(Adornment)`
  margin-left: 10px;
  align-self: ${(props) => props.position};
`

export default withTheme(Input)

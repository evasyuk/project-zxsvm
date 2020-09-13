import React from 'react'
import propTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../../dependent'

import {
  CheckboxWrapper,
  FormControlLabelWrapper,
  CheckboxComponent,
} from './styles'

const CustomCheckbox = ({ theme, label, icon, checkedIcon, key, ...props }) => (
  <CheckboxWrapper>
    <FormControlLabelWrapper
      key={key}
      control={
        <CheckboxComponent
          {...props}
          icon={
            icon || (
              <Icon
                name="checkboxOff"
                color={theme.colors.gray200}
                width={16}
                height={16}
              />
            )
          }
          checkedIcon={
            checkedIcon || (
              <Icon
                name="checkboxOn"
                color={theme.colors.white}
                bgColor={theme.colors.main}
                width={16}
                height={16}
              />
            )
          }
        />
      }
      label={label}
    />
  </CheckboxWrapper>
)

CustomCheckbox.propTypes = {
  theme: propTypes.object.isRequired,
  label: propTypes.string.isRequired,
  icon: propTypes.object,
  checkedIcon: propTypes.object,
  key: propTypes.string.isRequired,
  disableTouchRipple: propTypes.bool,
  disableFocusRipple: propTypes.bool,
  animate: propTypes.bool,
}

CustomCheckbox.defaultProps = {
  disableTouchRipple: true,
  disableFocusRipple: true,
  icon: null,
  checkedIcon: null,
  animate: undefined,
}

export default withTheme(CustomCheckbox)

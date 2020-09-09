import styled from "styled-components";

const getColor = props => {
    if (props && props.color) {
        return props.color
    }
    if (props && props.theme && props.theme.colors) {
        return props.theme.colors.gray300
    }
    return '#000000'
}

const getFontSize = props => {
    if (props && props.fontSize) {
        return props.fontSize
    }
    if (props && props.theme && props.theme.fontSizes) {
        return props.theme.fontSizes.s
    }
    return '12px'
}

const Text = styled.p`
  margin: 0;
  color: ${props => getColor(props)};
  font-size: ${props => getFontSize(props)};
`

export default Text

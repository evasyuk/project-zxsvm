import React from 'react'
import { string } from 'prop-types'
import { Icon } from '../../dependent'
import { AvatarWrapper } from './styles'

// TODO: improve
// create avatar component (load real URL) with loading preview =>
// 	 upload
// 	 create different sizes
const Avatar = ({ imageUrl }) => (
  <AvatarWrapper>
    {imageUrl ? (
      <img src={imageUrl} alt="avatar" />
    ) : (
      <Icon name="avatar" size={100} alt="avatar" />
    )}
  </AvatarWrapper>
)

Avatar.propTypes = {
  imageUrl: string,
}

Avatar.defaultTypes = {
  imageUrl: null,
}

export default Avatar
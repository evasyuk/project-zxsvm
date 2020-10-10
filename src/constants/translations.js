const translations = {
  lang_label: 'English',
  lang_key: 'en',
  SUCCESS: {
    PWD_CHANGED: 'Password changed successfully',
  },
  ERROR: {
    AUTH: {
      NOT_FOUND: 'No such users in the system',
      VALIDATION_ERROR: 'Invalid users data',
      EMAIL_ALREADY_IN_USE: 'Email(or phone) already in use',
      TOKEN_NOT_FOUND: 'Network request requires token',
    },
    'Network Error': 'Server is unavailable at this moment',
  },
  LANDING: {
    MORE_ON: 'More on',
  },
  LOG_IN: {
    EMAIL_INPUT: 'E-mail',
    PASSWORD_INPUT: 'Password',
    TITLE: 'Log in',
    BUTTON: 'Log in',
    SIGN_UP_LINK: 'Sign up here!',
    SIGN_UP_LINK_MOBILE: 'Sign up',
    NO_ACCOUNT: 'No account?',
    CREATE_NEW_ONE: 'Create new',
  },
  SIGN_UP: {
    TITLE: 'Sign up',
    ALREADY_REGISTERED: 'Already registered?',
    BACK_TO_LOGIN: 'Back to login',
    NAME_INPUT: 'User name',
    PHONE_NUMBER: 'Phone number',
    PHONE_INPUT: '+380731234567',
    EMAIL_INPUT: 'E-mail',
    PASSWORD_INPUT: 'Password',
    REPEAT_PASSWORD_INPUT: 'Repeat password',
    SIGN_UP_BUTTON: 'Sign up',
    CANCEL_BUTTON: 'Cancel',
    TERMS_AND_AGREEMENT_LABEL: 'I agree with the',
    TERMS_AND_AGREEMENT_LINK: 'privacy policy',
  },
  VALIDATION_ERRORS: {
    EMAIL_REQUIRED: 'Email is required',
    EMAIL_INVALID: 'Invalid email',
    PASSWORD_REQUIRED: 'Password is required',
    PASSWORD_NOT_MATCH: "Password didn't match",
    CONFIRM_PASSWORD_REQUIRED: 'Confirm password is required',
    CURRENT_PASSWORD_REQUIRED: 'Current password is required',
    NEW_PASSWORD_REQUIRED: 'New password is required',
    PASSWORD_MIN_LENGTH:
      'Password should contain at least {count} characters, uppercase and lowercase, a number and special character',
    NAME_MIN_LENGTH: 'First name should be at least {count} characters',
    NAME_MAX_LENGTH: 'First name should not be more then {count} characters',
    NAME_ONLY_ALPHABET: 'First name should contain only alphabet characters',
    NAME_REQUIRED: 'First name is required',
    LAST_NAME_REQUIRED: 'Last name is required',
    PHONE_NUMBER_INVALID: 'Invalid phone number',
    PHONE_NUMBER_REQUIRED: 'Phone number is required',
    PASSWORD_REPEAT_REQUIRED: 'Confirm password is required',
    DELETE_ACC_MISMATCH: 'print "delete account"',
    DELETE_ACC_CONFIRMATION_REQUIRED: 'Delete account confirmation required',
  },
  HEADER: {
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
    LOG_OUT: 'Log out',
  },
  PROFILE: {
    CHANGE_PASSWORD: 'Change password',
    DELETE_ACCOUNT: 'Delete account',

    PASSWORD_LABEL: 'Password',
    PASSWORD_REPEAT_LABEL: 'Password repeat',

    DELETE_ACC_LABEL: 'Confirm your intention: print "delete account"',

    PWD_CHANGE_BTN: 'Change password',
    DELETE_ACC_BTN: 'Delete account',
  },
}

export default translations

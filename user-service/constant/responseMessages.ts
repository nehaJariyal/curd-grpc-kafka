export const RES_MSG = {
  EMAIL_ALREADY_EXISTS: 'Email already exist in our system.',
  EMAIL_NOT_EXISTS: `Email dosen't exist in our system.`,
  PASSWORD_UPDATED: 'Password updated successfully',
  PASSWORD_NOT_UPDATED: 'Error while updating password',
  REFERRAL_CODE_DOESNT_EXIST: 'Referral Code does not exist',
  NUMBER_ALREADY_EXISTS: 'Mobile number already exist in our system.',
  SYMBOL_NOT_FOUND: 'Symbol not found.',
  ORDER_COIN_NOT_FOUND: (coin:any) => `${coin} not found.`,
  ORDER_COIN_NETWORK_NOT_FOUND: (coin:any) => `${coin} network not found.`
};
export const SECRET_MANAGER = {
  KEY_FOUND: 'Key found successfully',
  KEY_NOT_FOUND: 'Key not found '
};
export const KYC_MSG = {
  DOC_LIST: 'Doc list',
  DOC_ADDED: 'Doc added successfully',
  DOC_UPDATED: 'Doc updated successfully',
  DOC_INACTIVE: 'Doc marked as inactive successfully',
  DOC_ACTIVE: 'Doc marked as active successfully',
  BASIC_APPROVED: 'Basic KYC approved successfully',
  BASIC_KYC_SUBMITTED: 'Basic KYC submitted successfully',
  BASIC_KYC_UPDATED: 'Basic KYC updated successfully'
};

export const MIDDLEWARE_RESPONSE = {
  JWTERROR: 'Unauthorize Request',
  PERMISSION_DENIED: 'Permission denied for this user.',
  ONLY_LOGIN_WORKS: 'The feature is temporarily disabled.',
  JWT_MISSING: 'Token missing',
  JWT_TOKEN_INVALID: `Token is invalid`,
  SESSION_EXPIRED:'Session expired'
};

export const SUCCESS_MESSAGES = {
  SUCCESS: 'Request done successfully',
  UPDATE: 'Request updated successfully',
  LOGOUT: 'Logout successfully ',
  OTP_SEND: 'Email verification code sent successfully.',
  LOGIN_SUCCESS: 'Login successfully ',
  ALREADY_ADDED: 'pair already added as favourite',
  ADDED: 'Favourite pair added successfully.',
  DELETED: 'Favourite pair removed successfully.'
};
export const ORDER_MESSAGES = {
  ORDER_NOT_EXIST: 'Order not exists.'
};

export const ERROR_MESSAGES = {
  KEY_SECRET_NOT_FOUND: 'key and secret not found',
  INTERNAL_ERROR_SERVER: 'Internel server error.',
  SOMETHING_WENT_WRONG: 'Something went wrong.',
  UNAUTHORIZED: 'Unauthorized.',
  USERNAME_IS_ALREADY_EXIST:
    'Email already exist. Please try with a different email.',
  USERNAME_NOT_EXIST: `Email dosent't exist.`,
  USER_IS_LOCKED: `User status is locked. Please contact Admin for further assistance.`,
  PASSWORD_NOT_MATCHED: `Password not matched.`,
  KYC_BASIC_LEVEL_ALREADY_SAVE: 'You alreday submit KYC.',
  PAN_NUMBER_ALREADY_USED:
    'This pan Number is alreday linked with other account.',
  NATIONAL_ID_ALREADY_USED:
    'The National Id you entered is alreday linked with another account.',
  DOCUMENT_NOT_FOUND: 'Document not found',
  INVALID_DOCUMENT_TYPE: 'Document type invalid.',
  DOCUMENT_ALREADY_EXIST: 'Document already exist.',
  INVALID_USER_TOKEN: 'Invaid user id.',
  INVALID_USER_ID: 'Invaid user id.',
  INVALID_DOCUMENT_ID: 'Invaid document id.',
  INVALID_KYC_ID: 'Invaid KYC id.',
  ENABLE_SERVICE: 'Please Enable service',
  KYC_PREVIOUS_LEVEL_NOT_APPROVED: 'Your previous step KYC is not Approved',
  YOU_ALREADY_SUBMIT_DOC: 'You alreday submit doc.',
  OTP_SERVICE_IS_NOT_ACTIVATED: 'Otp service is not activated',
  OTP_OLD_EMAIL_FAILED: 'Old email otp is invalid',
  OTP_NEW_EMAIL_FAILED: 'New email otp is invalid',
  OTP_FAILED: 'Email otp is invalid',
  YOU_ALREDAY_PERFORM_THIS_ACTION: 'You alreday perform this action',
  INVALID_CREDENTIAL: `Email or password you entered is not correct.`,
  STATUS_ALREADY_UPDATED: `Status already updated`,
  DEVICE_ALREADY_VERIFIED: 'Device already verified',
  WEBHOOK_FAILED: 'Webhook has been failed.',
  RESTRICTED_EMAIL:
    'Your information triggers our security rules, if you have any questions, please contact our customer service.',
  INVALID_CAPTCHA: 'Captcha is not valid.',
  INVALID_CHARACTER: 'Invalid character found in request',
  MALFORMED_URL: 'Malformed Url detected',
  INSUFFICIENT_BALANCE: 'Insufficient balance',
  INVALID_PAIR: 'Invalid pair',
  BOTH_TRIGGER_PRICE_AND_DIRECTION_NEEDS_TO_BE_PROVIDED:'Please provide both trigger price and trigger direction collectively'
};

export const ERROR_NOT_FOUND = 'Not Found';
// export const OTP = {
//   OTP_SENT: 'Email verification code sent successfully.',
//   EMAIL_SENT: 'Otp verification code sent successfully.',
//   TOKEN_VERIFIED: `Token verified successfully.`,
//   TOKEN_INVALID: `You entered a wrong verification code`,
//   TOKEN_LIMIT_EXCEEDED: `Token limit exceeded. Please try again later`,
//   TOKEN_EXPIRED: `Token expired`,
//   TOKEN_NOT_EXIST: `Please send a token first`
// };
export const GOOGLE_AUTHENTICATE = {
  ACCOUNT_ALREDAY_ENABLE: 'Your Account is already enable',
  ACCOUNT_ALREDAY_DISABLE: 'Your Account is already disable',
  KEY_GENERATED: 'Google secret key generated successfully.',
  INVALID_TOKEN: 'Google Code Invalid, please try again.',
  GOOGLE_AUTH_ENABLE: 'Google authenticator has been enabled for your account.',
  GOOGLE_AUTH_DISABLE:
    'Google authenticator has been disabled for your account.',
  VERIFIED_SUCCESS: 'Token has been successfully verified.'
};

export const KYC_LOGS = {
  KYC_BASIC_SAVE: 'KYC basic save',
  KYC_INTERMEDIATE_SAVE: 'KYC Intermediate save',
  KYC_PRO_SAVE: 'KYC pro save'
};

export const FILE_UPLOAD = {
  FILE_UPLOADED: 'File Uploaded Successfully.',
  FILE_TYPE_NOT_MATCHED: `File must be of type jpeg, jpg , png`,
  FILE_SIZE_NOT_MATCHED: `File size must be less than or equal to ${process.env.UPLOAD_SIZE}MB`
};

export const VALIDATION_MESSAGES = {
  PASSWORD_EMPTY: 'New password should not be empty!',
  MIN_PASSWORD: `New password should have atleast 6 characters!`,
  PASSWORD_NOT_MATCHED: `New Password should not match with old password`,
  DATA_PROPERLY: 'Please Fill data properly',
  CONFIRM_PASSWORD_SHOULD_MATCH: `Confirm password should match with new password`,
  PASSWORD_INCORRECT_FORMAT: `Password must be alphanumaric.`
};

export const TABLES:any={
   USERS:"storeDatas"
}

import * as express from 'express';

export const REDIS_DBNAME: number = 0;
export const DEVICE_STATUS = {
  ACTIVE: 1,
  INACTIVE: 0
}
export const TABLE_NAME = {
  ADMIN_USERS:'admin_users',
  DEVICE_LOGS:'device_logs',
  ACTIVITIES_LOGS:'activities_logs',
  ACCOUNT_STATES:'account_states',
  GOOGLE_AUTH:'google_auth',
  GOOGLE_AUTH_ADMIN:'google_auth_admin',
  KYC:'kyc',
  KYC_SUM_SUB_USER_DETAILS:'kyc_sumsub_user_details',
  KYC_BASIC_LEVEL:'kyc_basic_level',
  KYC_DOCS_TYPES:'kyc_docs_types',
  KYC_INTERMEDIATE_LEVEL:'kyc_intermediate_level',
  KYC_LOGS:'kyc_logs',
  KYC_PRO_LEVEL:'kyc_pro_level',
  REGISTER:'register',
  RESTRICTED_DOMAIN:'restricted_domain',
  REFERRAL_CODES:'referral_codes',
  KYC_SERVICE:'kycService',
  CONTACT_US:'contact_us',
  PERMISSIONS:'permissions',
  ADMIN_PERMISSIONS:'admin_permissions',
  FRONTEND_ROUTES:'frontend_routes'
};

export const OTP = {
  DIGITS: 6
};

export const LOCATION = 'MOHALI';
export const JWT_KEYS = { JWT_USER: 'jwt_user_', JWT_ADMIN: 'jwt_admin_' };
export const USER_REGISTER_BY = {
  EMAIL:'EMAIL',
  MOBILE:'MOBILE'
};

export const ACTIVITY_TYPE = { LOGIN: 0, SECURITY: 1 };
export const DEVICE_TYPE = {
  WEB: 0,
  MOBILE: 1
};

export const KYC_STATUS = {
  PENDING:'PENDING',
  SUBMITTED:'SUBMITTED',
  APPROVED:'APPROVED',
  REJECTED:'REJECTED',
  RESUBMITTED:'RESUBMITTED'
};

export const KYC_LEVEL = {
  LEVEL_1:1,
  LEVEL_2:2,
  LEVEL_3:3
};
export const KYC_LEVEL_NAME = {
  LEVEL_1:'BASIC LEVEL',
  LEVEL_2:'INTERMEDIATE LEVEL',
  LEVEL_3:'PRO LEVEL'
};
export const KYC_DOC_LIST_STATUS = {
  ACTIVE: 1
};

export const USER_ROLES = {
  ADMIN:'admin',
  USER:'user'
};

export const SERVICES = {
  ONBOARD:'ONBOARD',
  REGISTER:'REGISTER',
  LOGIN:'LOGIN',
  FORGOT_PASSWORD:'FORGOTPASSWORD',
  RESET_PASSWORD:'RESETPASSWORD',
  BASICKYC:'BASICKYC',
  PASSWORD_CHANGED:'CHANGEPASSWORD',
  KYC_LEVEL2_REJECTED:'KYCLEVEL2REJECTED',
  RESET_SECURITY:'RESETSECURITY',
  KYC_MOBILE:"KYC_MOBILE",
  WITHDRAW_OTP:"WITHDRAW_OTP"
};

export const PASSWORD_REGX =
  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,100}$/
  /^.*(?=.{6})((?=.*[!@#$%^&*()\-_=+{}:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
export const VERIFY_STATUS = {
  IS_VERIFIED:1,
  NOT_VERIFIED:0
};

export const REDIS_USER_TOKEN_DB = {
  redisUserTokenDb:'0'
};

export const TIMEZONES = {
  Z:'Z'
};

export const TOKEN_TYPE = {
  accessToken:'ACCESS',
  refreshToken:'REFRESH'
};

export const TOKEN_TIME = {
  accessTokenTime: 60 * 6,
  refreshTokenTime: 60 * 2 * 60
};

export const LOGIN_STATUS = {
  LOCK:1,
  UNLOCK:2
};

export const AUTH_STATUS = {
  ENABLE:1,
  DISABLE:0
};

export const STATUS = {
  COMPLETE: 1,
  FAILED: 0
};

export const JWT_AUTHORIZED = {
  true: 1,
  false: 0
};
export interface expressRequestCustom extends express.Request {
  userInfo?: {
    userId:number;
    iat:number;
    exp:number;
    type:string;
    tokenType:string;
  };
}
export const NOTIFIATION_TYPE = {
  EMAIL: 'EMAIL',
  SMS: 'SMS'
};
export const BASE32 = 'base32';
export const SHA1 = 'SHA1';

export const LOG_MESSAGES = {
  REQUEST_FOR_FORGET_PASSWORD: 'Request for forget password',
  FORGET_PASSWORD_SUCCESSFULLY: 'forget password Successfully',
  INCORRECT_PASSWORD: 'Incorrect Password',
  GOOGLE_AUTH_VERIFICATION_FAILED: 'Google Auth Verification Failed',
  OTP_VERIFICATION_FAILED: 'Otp Verification Failed',
  SUCCESSFULLY_LOGIN: 'Succesfully Login',
  SUCCESSFULLY_SIGNUP: 'Succesfully Signup',
  OLD_PASSWORD_NOT_MATCHED: 'Old password not matched',
  PASSWORD_UPDTAED_SUCCESSFULLY: 'Password Updated Successfully',
  GOOGLE_AUTH_ENABLED_SUCCESSFULLY: 'Google Auth Enabled Successfully',
  GOOGLE_AUTH_DISABLED_SUCCESSFULLY: 'Google Auth Disabled Successfully',
  GOOGLE_AUTH_VERIFIED_SUCCESSFULLY: 'Google Auth Verified Successfully',
  MODIFIED_EMAIL_SUCCESSGULLY: 'Modified Email Successfully'
};

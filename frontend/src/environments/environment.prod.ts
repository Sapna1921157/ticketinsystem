// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// const API_URL = "https://10.228.12.184:5000";
const API_URL = "https://164.164.32.25:5601";

export const environment = {
    production: true,
    openMapToken: 'pk.eyJ1IjoiaGpvaG4xMjMiLCJhIjoiY2xma3FjcXAxMGQ5azQ2czRmNnAzMHV2cSJ9.JvHcg6FFTSFr1UFPmjwJ6g',
    API_URL: API_URL,
    recoverUrl : '/CTMS/#/recoverpassword',
    assetPath: 'assets',
    recaptchasiteKey : "6LeZaHImAAAAAOJaHVFOfRbOY9G8FvDtwGmyQjx2",
  //sign up component 
  createUser: API_URL + '/api/v1/users/createUser',

  // recover-password component
  recoverPassword: API_URL + '/api/v1/users/recoverPassword',

  //usermanagement
  viewUsers: API_URL + '/api/v1/users/viewUsers/',
  viewPendUsers: API_URL + '/api/v1/users/viewPendingUsers/',
  deleteUser: API_URL + '/api/v1/users/deleteUser/',
  editUser: API_URL + '/api/v1/users/editUser/',
  addUser: API_URL + '/api/v1/users/addUser',

  // login component
  login: API_URL + '/api/v1/users/login/',

  //header component
  logOut: API_URL + '/api/v1/users/logOut/',

  // change password
  change_passsword: API_URL + '/api/v1/users/change-password/',

  //forgot password
  forgot: API_URL + '/api/v1/users/forgot',

  // //dashboard
  // searchOperation: API_URL + '/searchOperation',

  // rest services
  filePath: API_URL + '/getFile',
  url: API_URL + '/url',
  findeone: API_URL + '/findeone',
};
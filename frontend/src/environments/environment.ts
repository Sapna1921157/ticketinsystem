const API_URL = "http://localhost:5601";

export const environment = {
  production: false,
  openMapToken: 'pk.eyJ1IjoiaGpvaG4xMjMiLCJhIjoiY2xma3FjcXAxMGQ5azQ2czRmNnAzMHV2cSJ9.JvHcg6FFTSFr1UFPmjwJ6g',
  API_URL: API_URL,
  recoverUrl: '/#/recoverpassword',
  assetPath: 'assets',
  recaptchasiteKey: "6LeZaHImAAAAAOJaHVFOfRbOY9G8FvDtwGmyQjx2",
  //sign up component 
  createUser: API_URL + '/api/v1/users/createUser',

  // recover-password component
  recoverPassword: API_URL + '/api/v1/users/recoverPassword',

  // login component
  login: API_URL + '/api/v1/users/login/',

  //header component
  logOut: API_URL + '/api/v1/users/logOut/',

  // change password
  change_passsword: API_URL + '/api/v1/users/change-password/',

  // // LogAlert
  // logAlert: API_URL + '/api/v1/users/logAlert',

  //forgot password
  forgot: API_URL + '/api/v1/users/forgot',

  // //Dashboard
  // dashChips : API_URL+ '/dashboard/dashChips',
  
  //usermanagement
  viewUsers: API_URL + '/api/v1/users/viewUsers/',
  viewPendUsers: API_URL + '/api/v1/users/viewPendingUsers/',
  deleteUser: API_URL + '/api/v1/users/deleteUser/',
  editUser: API_URL + '/api/v1/users/editUser/',
  addUser: API_URL + '/api/v1/users/addUser',


  
  // clusterUsers: API_URL + '/api/v1/users/viewclusterUsers',
  // regEx: API_URL + '/api/v1/users/regEx',
  // clusterIDUsers: API_URL + '/api/v1/users/viewclusterIDUsers',
  // pagelength: API_URL + '/api/v1/users/pagelength',
  

  // // alert log
  // logAlertCVE : API_URL+'/api/v1/users/logAlertCVE',

  //dashboard

//   // alert log
//   alertLog : API_URL+'/dash/alertLog',

  

//   // port log
//   portLog : API_URL+'/dash/portLog',

//   //chips
//   Chips :API_URL + '/api/v1/users/chips',

//   //known table
//   knownAttacks :API_URL + '/api/v1/users/knownAttacks',

// //unknown table
// unknownAttacks :API_URL + '/api/v1/users/unknownAttacks',

// //Log Based table
// LogTable :API_URL + '/api/v1/users/LogBasedTable',

// //Port Based table
// PortTable :API_URL + '/api/v1/users/PortBasedTable',

// chartTable :API_URL + '/api/v1/users/linechart',



// dotnetchart :API_URL + '/api/v1/users/dotnetchart',


// FormData :API_URL + '/api/v1/users/formfunction',

// saveAsDraft :API_URL + '/api/v1/users/saveAsDraft',

// saveData :API_URL + '/api/v1/users/save',

// submittedData :API_URL + '/api/v1/users/submitted',

// pendingRegex :API_URL + '/api/v1/users/pending',

// changestatus :API_URL + '/api/v1/users/changestatus',
// deleteDraft :API_URL + '/api/v1/users/deleteDraft/',

// updateAllocation :API_URL + '/api/v1/users/updateAllocation',
// updateAllocated :API_URL + '/api/v1/users/updateAllocated',
  // rest services
  filePath: API_URL + '/getFile',
  url: API_URL + '/url',
  findeone: API_URL + '/findeone',
};
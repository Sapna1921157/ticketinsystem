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
  
   
  
    // change password
    change_passsword: API_URL + '/api/v1/users/change-password/',
  

  
    //forgot password
    forgot: API_URL + '/api/v1/users/forgot',
  
  
  
  
  
 
  

  
    // rest services
    filePath: API_URL + '/getFile',
    url: API_URL + '/url',
    findeone: API_URL + '/findeone',
};

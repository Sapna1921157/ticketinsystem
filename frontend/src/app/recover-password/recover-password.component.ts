// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { RouterOutlet } from '@angular/router';


// @Component({
//   selector: 'app-recover-password',
//   templateUrl: './recover-password.component.html',
//   styleUrls: ['./recover-password.component.scss']
// })
// export class RecoverPasswordComponent {
//   constructor(private route:Router){

//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestService } from '../core/rest.service';
import { Subscription } from 'rxjs';
import { AESEncryptDecryptService } from '../common/aesencrypt-decrypt.service';
import { minLengthAsyncValidator } from '../common/validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  recoverPw!: Subscription
  getIp!: Subscription
  assetPath = environment.assetPath;
  recoverForm:any=FormGroup;
  captchaStatus = false;
  siteKey = environment.recaptchasiteKey;
  showpw:Boolean=true
  showConfpw:Boolean=true

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private restServ:RestService,
    private cryptServ:AESEncryptDecryptService,
    private fb: FormBuilder) { 
      this.initSignupForm();
  }

  initSignupForm() {
    this.recoverForm = this.fb.group({
        otp : new FormControl('', [Validators.required]),
        password: [''],
        newPwd: ['', [Validators.required], minLengthAsyncValidator(7)],
        encCpassword:[''],
        confirmPwd: ['', [Validators.required], minLengthAsyncValidator(7)],
      ip: [''],
      id:'',
      capcha_token: [''],
    });
  }


  ngOnInit(): void {
    this.getUserIp()
  }

  encConfirmPassword(e:any){
    if (e.target.value.length == 0){
      this.recoverForm.controls['confirmPwd'].reset()
      document.getElementById("encCpassword")?.setAttribute('type','hidden');
      document.getElementById("confirmPwd")?.setAttribute('type','password');
    }
else{
  let enc = this.cryptServ.encrypt(this.recoverForm.get('confirmPwd')?.value);
      this.recoverForm.get('confirmPwd')?.setValue(enc);
       
       document.getElementById("confirmPwd")?.setAttribute('type','hidden');
       document.getElementById("encCpassword")?.setAttribute('type','password');
      this.recoverForm.get('encCpassword')?.setValue(enc);
      this.showConfpw =false
}     
  }


  myEncryption(e:any){

    if (e.target.value.length == 0){
      this.recoverForm.controls['orgPassword'].reset()
      document.getElementById("Password")?.setAttribute('type','hidden');
      document.getElementById("newPwd")?.setAttribute('type','password');
    }
else{
      let enc = this.cryptServ.encrypt(this.recoverForm.get('newPwd')?.value);
      this.recoverForm.get('newPwd')?.setValue(enc);
       
       document.getElementById("newPwd")?.setAttribute('type','hidden');
       document.getElementById("Password")?.setAttribute('type','password');
      this.recoverForm.get('password')?.setValue(enc);
      this.showpw =false
}
  }


  getUserIp() {
  this.getIp = this.restServ.getUserIp().subscribe(res=>{
     this.recoverForm?.get('ip')?.setValue(res.ip);
   });
 }

  resolved(captchaResponse: string) {
    // console.log("captchaResponse",captchaResponse)
    this.captchaStatus = true;
    this.recoverForm?.get('capcha_token')?.setValue(captchaResponse);
  }


  resetPassword(){
    if (!this.captchaStatus) {
     
      return;
    }
   
    this.recoverForm.value.id = this.activateRoute.snapshot.url[1].path
    let recoverUrl = '/recoverpassword/'+  this.recoverForm.value.id

 this.restServ.post(environment.recoverPassword,this.recoverForm.value,{}).subscribe(res=>{  
      if (res.status==1){
      
      }
      else{
        
        this.recoverForm.reset();
    document.getElementById("Password")?.setAttribute('type','hidden');
    document.getElementById("newPwd")?.setAttribute('type','password');
    document.getElementById("encCpassword")?.setAttribute('type','hidden');
    document.getElementById("confirmPwd")?.setAttribute('type','password');
    this.router.navigate([recoverUrl])
      }
      this.router.navigate([recoverUrl])
    })
  }

  ngOnDestroy(): void{
if(this.getIp){
  this.getIp.unsubscribe()
}

  }
}

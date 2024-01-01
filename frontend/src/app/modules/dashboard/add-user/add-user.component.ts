import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/notification.service';
import { SignupService } from 'src/app/core/signup.service';
import { RestService } from 'src/app/core/rest.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { AESEncryptDecryptService } from 'src/app/common/aesencrypt-decrypt.service';
import { minLengthAsyncValidator } from 'src/app/common/validator';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  getNodeIdData! : Subscription;
  getAddUserData! : Subscription;
  Invaild:boolean=false;
  cInvaild:boolean=false;

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'organization',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 2,
    allowSearchFilter: true
  };

  allNodes: any[] = [];
  signUpForm: any = FormGroup;
  signupSubmitted = false;
  allRegionSelected = false;
  allSectorSelected = false;
  allOrganisationSelected = false;
  allNodeSelected = false;
  regionList: any[] = [];
  selectedResgion: any[] = [];
  finalRegionList: any[] = [];
  finalSectorList: any[] = [];
  selectedSectorArr: any[] = [];
  selectedOrganizations: any[] = [];
  finalOrganizationList: any;
  finalNodeList: any;
  accessNode: any[] = [];
  totalNodes:any
  showSector = false;
  showOrganization = false;
  showNodes = false;
  nameRegexReq = false;
  usernameRegexReq = false;

  constructor(private fb: FormBuilder, private router: Router, private signupService: SignupService,
    private cryptServ: AESEncryptDecryptService, 
 private dialogRef: MatDialog, private toastrService: NotificationService, private restServ: RestService,
    public dialogReff: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit(): void {
    this.initSignupForm();
  }


  counter(i: number) {
    return new Array(i);
  }

  encConfirmPassword(e: any) {
    this.cInvaild=false;

    if (e.target.value.length == 0){
      this.signUpForm.controls['cpassword'].reset()
      document.getElementById("encCpassword")?.setAttribute('type','hidden');
      document.getElementById("cpassword")?.setAttribute('type','password');
    }
else{

  let reg = new RegExp(
    "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$%^&*()!#]).*$"
  );

  if (!reg.test(e.target.value)) {
    this.cInvaild=true
  }
      let enc = this.cryptServ.encrypt(this.signUpForm.get('cpassword')?.value);
      this.signUpForm.get('cpassword')?.setValue(enc);

      document.getElementById("cpassword")?.setAttribute('type', 'hidden');
      document.getElementById("encCpassword")?.setAttribute('type', 'password');
      this.signUpForm.get('encCpassword')?.setValue(enc);

    }
  }
  myEncryption(e: any) {
    this.Invaild=false;
    if (e.target.value.length == 0){

      this.signUpForm.controls['orgPassword'].reset()
      document.getElementById("Password")?.setAttribute('type','hidden');
      document.getElementById("orgPassword")?.setAttribute('type','password');
    }
else{
  let reg = new RegExp(
    "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$%^&*()!#]).*$"
  );

  if (!reg.test(e.target.value)) {
    this.Invaild=true
  }
      let enc = this.cryptServ.encrypt(this.signUpForm.get('orgPassword')?.value);
      this.signUpForm.get('orgPassword')?.setValue(enc);

      document.getElementById("orgPassword")?.setAttribute('type', 'hidden');
      document.getElementById("Password")?.setAttribute('type', 'password');
      this.signUpForm.get('password')?.setValue(enc);

    }
  }

  initSignupForm() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")]],
      username: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")]],
      password: [''],
      orgPassword: ['', [Validators.required], minLengthAsyncValidator(7),Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).*$")],
      encCpassword: [''],
      cpassword: ['', [Validators.required], minLengthAsyncValidator(7)],
      role: ['', [Validators.required]],
      user_status: ['active'],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  get f() { 
    return this.signUpForm.controls;
  }

  addUser() {
    this.signupSubmitted = true;

    this.nameRegexReq = false;
    this.usernameRegexReq = false;
    this.signupSubmitted = true;

    this.signUpForm.get('name').setValue(this.signUpForm?.value.name.trim());
    let name = this.signUpForm?.value.name.trim();

    this.signUpForm.get('username').setValue(this.signUpForm?.value.username.trim());
    let username = this.signUpForm?.value.username.trim();
    var nameRegex = new RegExp("^[a-zA-Z0-9 ]+$");

    if (!nameRegex.test(name)) {
      this.toastrService.showError("Please Enter Alphanumeric name only");
      this.nameRegexReq = true;
      return;
    }

    if (!nameRegex.test(username)) {
      this.toastrService.showError("Please Enter Alphanumeric username only");
      this.usernameRegexReq = true;
      return;
    }
    if (this.allNodes.length != 0) {
      this.signUpForm.value.node = this.allNodes
    }

    this.getAddUserData = this.restServ.post(environment.addUser, this.signUpForm.value, {}).subscribe(res => {
   
      if (res.status == 1) {
        this.toastrService.showSuccess("User Added Successfully");
        this.dialogRef.closeAll();
      }
      else{
        if(res?.message){
          this.toastrService.showError(res.message)
        }
   else{
    this.toastrService.showError("User Not Registered. Try Again!!!")
   }
        // this.signUpForm.reset();
        document.getElementById("Password")?.setAttribute('type', 'hidden');
        document.getElementById("orgPassword")?.setAttribute('type', 'password');
        document.getElementById("encCpassword")?.setAttribute('type', 'hidden');
        document.getElementById("cpassword")?.setAttribute('type', 'password');
      }
    })


  }
  closeButton(type: any | undefined) {
    if (type == 'simple') {
      this.dialogReff.close();
    } else {
      this.dialogReff.close("I am closed!!")
    }
  }


ngOnDestroy(): void{
    if(this.getNodeIdData){
    this.getNodeIdData.unsubscribe();
    }
    if(this.getAddUserData){
    this.getAddUserData.unsubscribe();
    }
  } 
 
  
}

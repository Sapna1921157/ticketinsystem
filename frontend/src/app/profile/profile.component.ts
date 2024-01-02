//    import { Component } from '@angular/core';
//    import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-profile',
//  templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.scss']
// })
// export class ProfileComponent {
//   form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   onSubmit() {
//     if (this.form.valid) {
//       console.log('Form data submitted:', this.form.value);
//     }
//   }
  
  
// }

import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';
import { MatDialogRef } from '@angular/material/dialog';
import { RestService } from 'src/app/core/rest.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionstorageService } from 'src/app/common/sessionstorage.service';
import { NotificationService } from 'src/app/core//notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  getAllNodesData!: Subscription;
  getRegionData!: Subscription;
  getAllSectorsData!: Subscription;
  getAllOrganisationData!: Subscription;

  profileForm: FormGroup;

  id: any;
  name: any;
  username: any
  email: any
  
  constructor(
    private loginService: LoginService,
    public dialogReff: MatDialogRef<ProfileComponent>,
    private fb: FormBuilder,
    private sessServ: SessionstorageService,
    private notify: NotificationService,
    private restServ: RestService) {
    this.profileForm = this.fb.group({
      user_id: [this.loginService.getUser().user_id],
      name: [this.loginService.getUser().name,[Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")]],
      email: [this.loginService.getUser().email,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    })
  }

  get f(){
    return this.profileForm.controls['name'];
  }
  get fe(){
    return  this.profileForm.controls['email'];
  }

  ngOnInit(): void {
    this.getName()
    // this.getAllNodes();
    // this.check();
  }

  getName() {
    this.id = this.loginService.getUser().user_id;
    this.name = this.loginService.getUser().name;
    this.username = this.loginService.getUser().username;
    this.email = this.loginService.getUser().email;
    
  }
  closeButton(type: any | undefined) {
    if (type == 'simple') {
      this.dialogReff.close();
    } else {
      this.dialogReff.close("I am closed!!")
    }
  }

  // save() {
  //   // let url = environment.editProfile;

  //   let box = this.profileForm.value;
  //   if (box.email == this.email && box.name == this.name) {
  //     this.notify.showInfo("nothing change to edit");
  //   } else {
  //     this.restServ.post(url, this.profileForm.value, {}).subscribe(res => {
  //       if(res.message){
  //         this.notify.showSuccess(res.message);
  //       }
  //       // this.getProfile(); 
  //     })
      
  //   }
  // }


  // getProfile() {
  //   let url = environment.getuser + this.id;
  //   this.restServ.get(url, {}, {}).subscribe(res => {
  //     this.sessServ.saveUser(res[0]);
  //     this.closeButton('simple');
  //     // location.reload()
  //   })
  // }

  // getAllNodes() {
  //   this.getAllNodesData = this.restServ.get(environment.getAllNodes, {}, {}).subscribe(res => {
  //     this.allNodes = res;
  //   })
  //   this.getRegionData = this.restServ.get(environment.region, {}, {}).subscribe(res => {
  //     this.region = res
  //   })
  //   this.getAllSectorsData = this.restServ.get(environment.getAllSectors, {}, {}).subscribe(res => {
  //     this.sector = res
  //   })
  //   this.getAllOrganisationData = this.restServ.get(environment.getAllOrganization, {}, {}).subscribe(res => {
  //     this.organization = res
  //   })
  // }
  ngOnDestroy(): void {

  }
}



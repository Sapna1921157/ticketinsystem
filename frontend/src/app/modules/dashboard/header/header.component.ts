import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from 'src/app/core/rest.service';
import { SessionstorageService } from 'src/app/common/sessionstorage.service';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/login.service';
import { ChangepasswordComponent } from '../../share/changepassword/changepassword.component';
import { NotificationService } from 'src/app/core/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // router: any;

  currentComponent: any;
  getLogoutData!: Subscription
username:any;
userType: any;

  logoutCheck: Boolean = false

  constructor(private router:Router,
    public dialog: MatDialog,
    private restServ: RestService,
    private sessServ: SessionstorageService,
    private loginService: LoginService,
    private notiService: NotificationService
    ){
   
  }
  // signout() {
  //   this.route.navigate(['/login'])
  // }
  ngOnInit(): void {

    this.userType = this.loginService.getUser().role;
    let currentUrl = this.router.url.split('/')
    let lengthOfUrl = this.router.url.split('/').length

    this.currentComponent = currentUrl[lengthOfUrl - 1]
    this.getName();
  }



  getName() {
    this.username = this.loginService.getUser().name;
    // console.log('ss',this.username);
  }

  logout() {
    this.logoutCheck = true
    let url = environment.logOut;
    this.restServ.getnew(url, {}, {}).subscribe(res => {
      this.sessServ.logout();

    },
      (error) => {
        this.logout()
      }

    );

  }
  signout() 
  {
    this.logoutCheck = true
    let url = environment.logOut;
    this.restServ.getnew(url, {}, {}).subscribe(res => {
      this.sessServ.logout();
  
    },
      (error) => {
        this.signout()
      }
  
    );
  
  }
  
  
  // navgation(link:any){
  //   this.route.navigate([`/${link}`])
  // }
  profile(){
    // this.router.navigate(['/change-password']);
    let dialogRef = this.dialog.open(ProfileComponent,{
      // data: dataToSend
    } );
    
  }

  
  navigation(path?: any) {
    this.router.navigate([`/dashboard/${path}`])
  }

  changePassword() {
    let dialogRef = this.dialog.open(ChangepasswordComponent, {
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.notiService.showSuccess("Password Changed successfully");
      }

    })

}

}
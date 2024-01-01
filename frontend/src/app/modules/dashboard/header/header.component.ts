import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from 'src/app/core/rest.service';
import { SessionstorageService } from 'src/app/common/sessionstorage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // router: any;


  getLogoutData!: Subscription

  logoutCheck: Boolean = false

  constructor(private route:Router,
    
    private restServ: RestService,
    private sessServ: SessionstorageService,
    ){
   
  }
  // signout() {
  //   this.route.navigate(['/login'])
  // }

  signout() 
  {
    this.logoutCheck = true
    let url = environment.logOut;
    this.restServ.getnew(url, {}, {}).subscribe(res => {
      this.sessServ.logout();
  
    },
      (error) => {
        // this.signout()
      }
  
    );
  
  }
  
  
  navgation(link:any){
    this.route.navigate([`/${link}`])
  }
}


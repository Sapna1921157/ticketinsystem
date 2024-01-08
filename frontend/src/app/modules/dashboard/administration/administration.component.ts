import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionstorageService } from 'src/app/common/sessionstorage.service';
import { LoginService } from 'src/app/core/login.service';
import { NotificationService } from 'src/app/core/notification.service';
import { RestService } from 'src/app/core/rest.service';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {
  currentComponent: any;


  constructor(private router:Router,
    public dialog: MatDialog,
    private restServ: RestService,
    private sessServ: SessionstorageService,
    private loginService: LoginService,
    private notiService: NotificationService
    ){
   
  }
   
  navigation(path?: any) {
    this.router.navigate([`/dashboard/${path}`])
  }

}

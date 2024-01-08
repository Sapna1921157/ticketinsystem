import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionstorageService } from 'src/app/common/sessionstorage.service';
import { NotificationService } from 'src/app/core/notification.service';
import { RestService } from 'src/app/core/rest.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  currentComponent: any;


  constructor(private router:Router,
    private restServ: RestService,
    private sessServ: SessionstorageService,
 
    private notiService: NotificationService
    ){
   
  }
   
  navigation(path?: any) {
    this.router.navigate([`/dashboard/${path}`])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  router: any;
  constructor(private route:Router){

  }
  signout() {
    this.route.navigate(['/login'])
  }
}

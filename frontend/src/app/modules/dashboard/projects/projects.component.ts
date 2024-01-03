import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component
(
  {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
  }
)
export class ProjectsComponent 
{
  currentComponent: any;
    constructor(private router:Router)
    {
  
    }
    navigation(link:any)
    {
      this.router.navigate([`/${link}`])
    }
    selectedtab = 1;
    Tab1(){
      this.selectedtab = 1;
    }
    Tab2()
    {
      this.selectedtab = 2;

      
    }
    Tab3()
    {
      this.selectedtab = 3;

      
    }

  
}

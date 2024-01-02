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
    constructor(private router:Router)
    {
  
    }
    navgation(link:any)
    {
      this.router.navigate([`/${link}`])
    }

  activeLink: string | null = null;

  navigate(link: string) {
    this.activeLink = link;
    this.router.navigate([`/${link}`]);
  }
}

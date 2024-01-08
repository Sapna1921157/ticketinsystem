import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNewProjectComponent } from '../add-new-project/add-new-project.component';

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
    constructor(private router:Router,public dialog: MatDialog)
    
    {
      
  
    }
    navigation(link:any)
    {
      this.router.navigate([`/${link}`])
    }
    navi(){
      let dialogRef = this.dialog.open(AddNewProjectComponent);
      dialogRef.afterClosed().subscribe(res => 
        {
          
       
    })
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

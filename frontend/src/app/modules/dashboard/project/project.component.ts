import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionstorageService } from 'src/app/common/sessionstorage.service';
import { NotificationService } from 'src/app/core/notification.service';
import { RestService } from 'src/app/core/rest.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent  implements OnInit {
  currentComponent: any;
  
  // 8888
  browser !: Subscription
  profile !: Subscription
  vm !: Subscription
  remProfile !: Subscription
  file !: Subscription
  addBrows !: Subscription
  addFile !: Subscription
  remBrows !: Subscription

  ahpProfileConf:any=FormGroup;
  browserform:any=FormGroup;
  filetypeform:any=FormGroup;
  data:any=[]
  browsers:any
  fileType:any

  displayedColumns = [
    'vm_id',
    'vm_name',
    'browser_id',
    
    'delete'
  ];
  

  dataSource!: MatTableDataSource<any>;
@ViewChild('paginator') paginator!: MatPaginator;


////stop

  constructor(private router:Router,
    private restServ: RestService,
    private sessServ: SessionstorageService,
    private fb:FormBuilder,

    private notify: NotificationService
    ){
   
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.initSignupForm()
    this.getvm()
  }
   

  get P() {
    return this.ahpProfileConf.controls;
  }

  get f() {
    return this.filetypeform.controls;
  }

  get b() {
    return this.browserform.controls;
  }

  initSignupForm() {
    
  }


  addProfile(){
    let url=environment;
   this.profile = this.restServ.post(url,this.ahpProfileConf.value,{}).subscribe(res=>{
      if(res.message=="Profile Added Successfully"){
        this.notify.showSuccess(res.message);
      } else{
        this.notify.showError(res.message);
      }
      this.ahpProfileConf.reset();
      this.getvm();
    })   
  }
  getvm(){
    let url=environment;
    this.vm =  this.restServ.get(url,{},{}).subscribe(res=>{
      this.dataSource = new MatTableDataSource();
      this.dataSource.paginator = this.paginator;
    })
  }

  deleteProfile(profile_id:any){
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result:any) => {
      if (result.isConfirmed) {
        let url=environment
        this.remProfile = this.restServ.post(url,{profile_id},{}).subscribe(res=>{
        this.notify.showSuccess(res.message);
        this.getvm();
    })
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire('Cancelled', 'User not removed', 'error');
      }
      
    });
  }


  

  ngOnDestroy(){
    if(this.browser){
      this.browser.unsubscribe()
    }
    if(this.profile){
      this.profile.unsubscribe()
    }
    if(this.vm){
      this.vm.unsubscribe()
    }
    if(this.remProfile){
      this.remProfile.unsubscribe()
    }
    if(this.addBrows){
      this.addBrows.unsubscribe()
    }
    if(this.file){
      this.file.unsubscribe()
    }
    if(this.remBrows){
      this.remBrows.unsubscribe()
    }
    if(this.addFile){
      this.addFile.unsubscribe()
    }
  }

  
  navigation(path?: any) {
    this.router.navigate([`/dashboard/${path}`])
  }

}

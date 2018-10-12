import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
private name:string
 constructor(public http: HttpClient)
  {
    
   this.getName();
   }

  ngOnInit() {
  }
  private locals:string[];
  
  logOut(){
    localStorage.removeItem('currentUser');
   // this.authenticationService.logout();
  }

  tryHttp(){
   // this.authenticationService.tryHttp();
 
   this.http.get('http://server.simplestate.me/api/property/details')
   .subscribe(
     data => console.log(data),
     err => console.log(err)
   );
  }
  public getName(): string {
    try{
      const local=JSON.parse(localStorage.getItem('currentUser'));
     this.name=local["first_name"]+" "+local["last_name"];
      console.log(this.name);
    }
    catch(error){
this.name='';
    }
    return this.name;
  }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) { }
  
  ngOnInit() {
   // this.getHeroes();
  }

}
/*getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}*/

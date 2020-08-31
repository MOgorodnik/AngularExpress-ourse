import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from './../shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
  }
  
  search(query: string){
    console.log(query)
    this.usersList = this.usersService.findUser(query);
  }

  sort(direction: string){
    console.log(direction)
    // this.usersList = this.usersService.sortUser(direction);
    this.usersList = this.usersService.sortUserWithComp(direction);
  }
}

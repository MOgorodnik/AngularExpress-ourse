import { Component, OnInit } from '@angular/core';
import { User } from './../shared/user';
import { UsersService } from './../users.service';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];
  name: string;
  username: string;
  role: string;
  selectedList: User[];


  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
  }

  search(query: string) {
    console.log(query)
    this.usersList = this.usersService.findUser(query);
  }

  sort(direction: string) {
    console.log(direction)
    // this.usersList = this.usersService.sortUser(direction);
    this.usersList = this.usersService.sortUserWithComp(direction);
  }

  add() {
    console.log(this.name);
    console.log(this.role);
    console.log(this.username);
    this.usersService.addUser({
      id: Math.floor((Math.random() * 20) + 10),
      name: this.name,
      username: this.username,
      email: '',
      role: this.role,
      phone: '',
      website: '',
    });

    this.usersList = this.usersService.getUsersList();
  }

  selectItem(users: MatListOption[] ) {
    this.selectedList = [];
    users.forEach( elm => {
      this.selectedList.push(elm.value);
    });
  }

  deleteForService() {
    console.log(12121)
    this.usersService.deleteUsers(this.selectedList)
  }
}

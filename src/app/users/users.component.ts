import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Vishnu'
    },
    {
      id: 2,
      name: 'Kishan'
    },
    {
      id: 3,
      name: 'Sagar'
    },
    {
      id: 4,
      name: 'Kartik'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

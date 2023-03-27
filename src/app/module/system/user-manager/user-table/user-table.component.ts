import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor() { }
  dtOptions: any = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      lengthMenu: [1,2,3,4,5,6,7],
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
      ],
      columns: [
        {
          title: 'id',
          data: 'id'
        },
        {
          title: 'name',
          data: 'name'
        },
        {
          title: 'email',
          data: 'email'
        },
        {
          title: 'phone',
          data: 'col4'
        },
        {
          title: 'Action',
          data: 'col5'
        }
      ],
    }
  }

}

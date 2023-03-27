import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broadcast-table-form',
  templateUrl: './broadcast-table-form.component.html',
  styleUrls: ['./broadcast-table-form.component.scss']
})
export class BroadcastTableFormComponent implements OnInit {

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
          data: 'phone'
        },
        {
          title: 'action',
          data: 'action'
        }
      ],
    }
  }

}

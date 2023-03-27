import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-table-form',
  templateUrl: './insurance-table-form.component.html',
  styleUrls: ['./insurance-table-form.component.scss']
})
export class InsuranceTableFormComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  dtOptions: any = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      lengthMenu: [7, 10, 15],
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
      ],
      columns: [
        {
          title: 'col1',
          data: 'col1'
        },
        {
          title: 'col2',
          data: 'col2'
        },
        {
          title: 'col3',
          data: 'col3'
        },
        {
          title: 'col4',
          data: 'col4'
        },
        {
          title: 'col5',
          data: 'col5'
        }
      ],
    }
  }
}

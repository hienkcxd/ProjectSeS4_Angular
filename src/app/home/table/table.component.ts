import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  title = 'datatable';
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      lengthMenu: [5, 10, 15],
      dom: 'Bfrtip',
      buttons: [
        'excel',
        'pageLength',
      ],
      columns: [
        {
        title: 'Rendering engine',
        data: 'col1'
      },
        {
        title: 'Browser',
        data: 'col2'
      },
        {
        title: 'Platform(s)',
        data: 'col3'
      },
        {
        title: 'Engine version',
        data: 'col4'
      },
        {
        title: 'Engine version',
        data: 'col5'
      },],
      responsive: true,
    }
  }
}

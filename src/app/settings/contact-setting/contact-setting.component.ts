import { Component, OnInit, ViewChild } from '@angular/core';
import _ from 'lodash';
import { SettingService } from '../settings.service';
import { Payload, Field } from 'src/app/interface';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-contact-setting',
  templateUrl: './contact-setting.component.html',
  styleUrls: ['./contact-setting.component.css']
})

export class ContactSettingComponent implements OnInit {
  private payload: Payload;
  tableFields = [];
  displayedColumns: string[];
  contactFields = new MatTableDataSource([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private settingService: SettingService) {
    this.payload = {
      customerId: '8a4324f0-40e7-11e9-90e8-df8f2c248da4',
      shopId: '955094e2-40e7-11e9-86dd-89925f7acfe1'
    };
    this.tableFields = [
      {id: 'no', name: 'No.'},
      {id: 'createdTime', name: 'Created Date'},
      {id: 'name', name: 'Name'},
      {id: 'type', name: 'Type'},
      {id: 'description', name: 'Description'},
      {id: 'required', name: 'Required'}
    ];
    const columns = this.tableFields.map(field => field.id);
    this.displayedColumns = columns.concat('action');
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.settingService.getContactFields(this.payload)
      .subscribe(response => {
        const data = _.get(response, 'data');
        const fields = data.map((item, index) => Object.assign({}, item, { no: index }));
        this.contactFields = new MatTableDataSource<Field>(fields);
        this.contactFields.sort = this.sort;
        this.contactFields.paginator = this.paginator;
      });
  }

  onAdd() {
    console.log('adhahdhahhad');
  }
}

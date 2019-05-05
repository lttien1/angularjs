import { Component, OnInit, ViewChild } from '@angular/core';
import _ from 'lodash';
import { SettingService } from '../settings.service';
import { Payload, Field } from 'src/app/interface';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

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
  isOpen = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private settingService: SettingService) {
    this.payload = {
      customerId: '8a4324f0-40e7-11e9-90e8-df8f2c248da4',
      shopId: '955094e2-40e7-11e9-86dd-89925f7acfe1'
    };
    this.tableFields = [
      {id: 'position', name: 'No.'},
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
        const fields = data.map((item, index) => Object.assign({}, item, { position: index + 1 }));
        this.contactFields = new MatTableDataSource<Field>(fields);
        this.contactFields.sort = this.sort;
        this.contactFields.paginator = this.paginator;
      });
  }

  onAdd() {
    this.isOpen = !this.isOpen;
    console.log('adhahdhahhad');
  }
}

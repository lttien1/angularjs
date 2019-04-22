import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DashboardService } from './dashboard.service';
import { Payload, ContactResponse, Contact, Field } from '../interface';
import _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[];
  dataSource;
  selection = new SelectionModel<Contact>(true, []);

  payload: Payload;
  contactAndFields: ContactResponse;

  tableFields: object[];
  showFormFields: Array<Field>;

  constructor(private dashboardService: DashboardService) {
    this.payload = {
      customerId: '8a4324f0-40e7-11e9-90e8-df8f2c248da4',
      shopId: '955094e2-40e7-11e9-86dd-89925f7acfe1'
    };
  }
  ngOnInit() {
    this.getContactAndFields();
  }
  getContactAndFields(): void {
    this.dashboardService.getContactAndFields(this.payload)
      .subscribe(response => {
        this.contactAndFields = _.get(response, 'data');
        const contacts = _.get(this.contactAndFields, 'searchResult.contacts');
        this.dataSource = new MatTableDataSource<Contact>(contacts);
        this.showFormFields = (_.get(this.contactAndFields, 'formFields') || []).filter((field: Field) => field.show === true);
        const tableColumns = this.showFormFields.map((field: Field) => field.id);
        this.displayedColumns = ['select'].concat(tableColumns);
        this.tableFields = _.get(this.contactAndFields, 'tableFields');
      });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: Contact): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }
  getSelectedRow() {
    const numSelected = this.selection.selected.length;
    const selected = this.selection.hasValue() ? this.selection.selected[numSelected - 1] : null;
    return selected;
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

export interface bookData {
  name: string ;
  start: string ;
  end: string ;
  writer: string ;
  cover: string ;
  action: any ;
}

const ELEMENT_DATA: bookData[] = [
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
  { name: 'Hydrogen', start: 's', end: 'H', writer: 'writer', cover: 'url', action: '' },
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dialogRef: MatDialog,
  ) {}

  displayedColumns: string[] = ['name', 'start', 'end', 'writer', 'cover', 'action'] ;
  dataSource = ELEMENT_DATA ;

  openAddDialog() {
    const dialogRef = this.dialogRef.open(DialogAddComponent, {
      width: '350px',
      height: '475px',
      
    })
    dialogRef.afterClosed().subscribe(result => {

    })
  }
  openEditDialog() {
    const dialogRef = this.dialogRef.open(DialogEditComponent, {
      width: '350px',
      height: '475px',
      
    })
    dialogRef.afterClosed().subscribe(result => {

    })
  }

  openDeleteDialog() {
    const dialogRef = this.dialogRef.open(DialogDeleteComponent, {
      width: '450px',
      height: '340px',
      
    })
    dialogRef.afterClosed().subscribe(result => {

    })
  }
}

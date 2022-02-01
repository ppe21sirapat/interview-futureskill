import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<DialogAddComponent>,
  ) { }

  ngOnInit(): void {
  }

  formName = new FormControl('', Validators.required) ;
  formStartDate = new FormControl('', Validators.required) ;
  formEndDate = new FormControl('', Validators.required) ;
  formWriter = new FormControl('', Validators.required) ;
  formCover = new FormControl('' ,Validators.required) ;

  addBook() {
    let name = this.formName.value ;
    let start_date = this.formStartDate.value ;
    let end_date = this.formEndDate.value ;
    let writer = this.formWriter.value ;
    let cover = this.formCover.value ;

    let body = {
      name: name,
      start_date: start_date,
      end_date: end_date,
      writer: writer,
      cover: cover
    } 

    if(!name || !start_date || !end_date || !writer || !cover)
    {
      this.formName.markAsTouched ;
      this.formStartDate.markAsTouched ;
      this.formEndDate.markAsTouched ;
      this.formWriter.markAsTouched ;
      this.formCover.markAsTouched ;
    }
    else
    {
      this.http.post<any>('http://localhost:8000/api/add',body).subscribe(res => {
            this.dialogRef.close() ;
      })
    }
  }
}

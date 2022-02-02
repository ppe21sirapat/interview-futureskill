import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public editId: any
  ) { }

  ngOnInit(): void {
    this.getEditForm(this.editId.id) ;
  }

  formName = new FormControl('', Validators.required) ;
  formStartDate = new FormControl('', Validators.required) ;
  formEndDate = new FormControl('', Validators.required) ;
  formWriter = new FormControl('', Validators.required) ;
  formCover = new FormControl('' ,Validators.required) ;

  getEditForm(id:number) {
    this.http.post<any>('http://localhost:8000/api//bookById',{id: id}).subscribe(res => {
      console.log(res.data[0]) ;
      // set Input value 
      this.formName.setValue(res.data[0].name) ;
      this.formStartDate.setValue(res.data[0].start_date) ;
      this.formEndDate.setValue(res.data[0].end_date) ;
      this.formWriter.setValue(res.data[0].writer) ;
      this.formCover.setValue(res.data[0].cover) ;
    })
  }

  update() {
    let id = this.editId.id ;
    let name = this.formName.value ;
    let start_date = this.formStartDate.value ;
    let end_date = this.formEndDate.value ;
    let writer = this.formWriter.value ;
    let cover = this.formCover.value ;

    let body = {
      id: id,
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
      this.http.post<any>('http://localhost:8000/api/edit',body).subscribe(res => {
            this.dialogRef.close() ;
      })
    }
  }

}


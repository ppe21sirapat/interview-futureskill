import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public deleteId: any ,
  ) { }

  ngOnInit(): void {
  }

  delete() {
    let id = this.deleteId.id ;

    this.http.post<any>('http://localhost:8000/api/delete',{id: id}).subscribe(res => {
      this.dialogRef.close()
    })
  }

  cancelClick() {
    this.dialogRef.close() ;
  }  
}

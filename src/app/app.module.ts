import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material UI
import {MatTableModule} from '@angular/material/table' ;
import {MatCardModule} from '@angular/material/card' ;
import {MatButtonModule} from '@angular/material/button' ;
import {MatIconModule} from '@angular/material/icon' ;
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddComponent } from './dialog-add/dialog-add.component' ;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component' ;

@NgModule({
  declarations: [
    AppComponent,
    DialogAddComponent,
    DialogDeleteComponent,
    DialogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    DialogAddComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

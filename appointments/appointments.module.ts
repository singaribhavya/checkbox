import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import { AppointmentsComponent } from './appointments.component';
import { AppointmentsRoutes } from './appointments.router';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

// material modules


// forms module




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppointmentsRoutes),
   
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    TranslateModule
  ],
  declarations: [AppointmentsComponent],
  entryComponents: []
})
export class AppointmentsModule { }

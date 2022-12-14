import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from '../../pages/tables/smart-table/smart-table.component';
import { UsersComponent } from './users.component';
import { Ng2SmartTableComponent, Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [SmartTableComponent, Ng2SmartTableComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
  ],
  bootstrap: [UsersComponent],
})
export class UsersModule { }

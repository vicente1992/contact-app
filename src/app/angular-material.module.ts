import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";


const myModule = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatMomentDateModule,
];


@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule]
})

export class MaterialModule {

}

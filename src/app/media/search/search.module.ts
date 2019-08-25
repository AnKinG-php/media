import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: SearchComponent }])
  ],
  declarations: [SearchComponent]
})
export class SearchModule {}

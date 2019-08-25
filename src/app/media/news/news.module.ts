import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: NewsComponent }])
  ],
  declarations: [NewsComponent]
})
export class NewsModule {}

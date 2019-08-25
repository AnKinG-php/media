import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRoutingModule } from './media.router.module';
import { MediaComponent } from './media.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MediaRoutingModule,
    RouterModule
  ],
  declarations: [MediaComponent]
})
export class MediaModule {}

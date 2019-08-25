import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { AutosizeModule } from 'ngx-autosize';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AutosizeModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: PlaylistComponent }])
  ],
  declarations: [PlaylistComponent]
})
export class PlaylistModule {}

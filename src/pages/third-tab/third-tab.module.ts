import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThirdTabPage } from './third-tab';

@NgModule({
  declarations: [
    ThirdTabPage,
  ],
  imports: [
    IonicPageModule.forChild(ThirdTabPage),
  ],
})
export class ThirdTabPageModule {}

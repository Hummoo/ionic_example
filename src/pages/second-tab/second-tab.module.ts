import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondTabPage } from './second-tab';

@NgModule({
  declarations: [
    SecondTabPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondTabPage),
  ],
})
export class SecondTabPageModule {}

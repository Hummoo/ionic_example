import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestSliderPage } from './test-slider';

@NgModule({
  declarations: [
    TestSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(TestSliderPage),
  ],
})
export class TestSliderPageModule {}

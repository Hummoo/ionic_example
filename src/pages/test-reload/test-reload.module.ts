import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestReloadPage } from './test-reload';

@NgModule({
  declarations: [
    TestReloadPage,
  ],
  imports: [
    IonicPageModule.forChild(TestReloadPage),
  ],
})
export class TestReloadPageModule {}

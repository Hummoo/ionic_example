import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestReorderPage } from './test-reorder';

@NgModule({
  declarations: [
    TestReorderPage,
  ],
  imports: [
    IonicPageModule.forChild(TestReorderPage),
  ],
})
export class TestReorderPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestSearchPage } from './test-search';

@NgModule({
  declarations: [
    TestSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TestSearchPage),
  ],
})
export class TestSearchPageModule {}

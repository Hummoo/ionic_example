import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestInternationalizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-internationalization',
  templateUrl: 'test-internationalization.html',
})
export class TestInternationalizationPage {

  selectLang: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {
    //this.selectLang = this.translateService.getDefaultLang();
    alert(`Current lang : ${this.translateService.currentLang}`);
    this.selectLang = this.translateService.currentLang;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestInternationalizationPage');
  }

  changeLanguage(lang: string) {
    alert(`Select lang : ${lang}`);
    this.translateService.use(lang);
  }

}

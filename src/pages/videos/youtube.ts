import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-youtube',
    template: `
    <ion-header>
        <ion-navbar>
            <ion-title>Vimeo Video</ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content>
        <iframe src="https://player.vimeo.com/video/212758265" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </ion-content>
    `
})
export class YoutubePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad YoutubePage');
    }

}

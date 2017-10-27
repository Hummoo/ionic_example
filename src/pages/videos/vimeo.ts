import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-vimeo',
    template: `
    <ion-header>
        <ion-navbar>
            <ion-title>Vimeo Video</ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content>
        <iframe src="https://player.vimeo.com/video/238073511?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </ion-content>
    `
})
export class VimeoPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VimeoPage');
    }

}

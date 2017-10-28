import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FirstTabPage } from '../pages/first-tab/first-tab';
import { SecondTabPage } from '../pages/second-tab/second-tab';
import { TabsPage } from '../pages/tabs/tabs';
import { ThirdTabPage } from '../pages/third-tab/third-tab';
import { SampleProvider } from '../providers/sample/sample';
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { SampleFirebaseProvider } from '../providers/sample-firebase/sample-firebase';
import { MapProvider } from '../providers/map/map';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FirstTabPage,
    SecondTabPage,
    ThirdTabPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FirstTabPage,
    SecondTabPage,
    ThirdTabPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SampleProvider,
    SampleFirebaseProvider,
    MapProvider
  ]
})
export class AppModule { }

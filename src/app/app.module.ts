import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FirstTabPage } from '../pages/first-tab/first-tab';
import { IntroPage } from '../pages/intro/intro';
import { SecondTabPage } from '../pages/second-tab/second-tab';
import { TabsPage } from '../pages/tabs/tabs';
import { ThirdTabPage } from '../pages/third-tab/third-tab';
import { SampleFirebaseProvider } from '../providers/sample-firebase/sample-firebase';
import { SampleProvider } from '../providers/sample/sample';
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    TabsPage,
    FirstTabPage,
    SecondTabPage,
    ThirdTabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    TabsPage,
    FirstTabPage,
    SecondTabPage,
    ThirdTabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SampleProvider,
    SampleFirebaseProvider
  ]
})
export class AppModule { }

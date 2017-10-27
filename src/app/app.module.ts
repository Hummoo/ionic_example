import { ProfilePage } from '../pages/profile/profile';
import { ParallaxHeaderDirective } from './../directives/parallax-header/parallax-header';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FirstTabPage } from '../pages/first-tab/first-tab';
import { IntroPage } from '../pages/intro/intro';
import { MusicPage } from '../pages/music/music';
import { NewsFeedPage } from '../pages/news-feed/news-feed';
import { SecondTabPage } from '../pages/second-tab/second-tab';
import { TabsPage } from '../pages/tabs/tabs';
import { ThemingPage } from '../pages/theming/theming';
import { ThirdTabPage } from '../pages/third-tab/third-tab';
import { SampleFirebaseProvider } from '../providers/sample-firebase/sample-firebase';
import { SampleProvider } from '../providers/sample/sample';
import { LoginPage } from './../pages/login/login';
import { VimeoPage } from './../pages/videos/vimeo';
import { YoutubePage } from './../pages/videos/youtube';
import { MyApp } from './app.component';
import { ElasticsearchProvider } from '../providers/elasticsearch/elasticsearch';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestInternationalizationPage } from '../pages/test-internationalization/test-internationalization';
import { SampleDataProvider } from '../providers/sample-data/sample-data';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    TabsPage,
    FirstTabPage,
    SecondTabPage,
    ThirdTabPage,
    LoginPage,
    ThemingPage,
    VimeoPage,
    YoutubePage,
    MusicPage,
    NewsFeedPage,
    ProfilePage,
    ParallaxHeaderDirective,
    TestInternationalizationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    TabsPage,
    FirstTabPage,
    SecondTabPage,
    ThirdTabPage,
    LoginPage,
    ThemingPage,
    VimeoPage,
    YoutubePage,
    MusicPage,
    NewsFeedPage,
    ProfilePage,
    TestInternationalizationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ElasticsearchProvider,
    SampleProvider,
    SampleFirebaseProvider,
    SampleDataProvider
  ]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
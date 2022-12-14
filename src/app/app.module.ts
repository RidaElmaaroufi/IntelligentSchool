/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbCardModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent, UsersComponent, StatisticsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    NgxEchartsModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          // baseEndpoint: environment.backend_url,
           login: {
             endpoint: 'login',
             method: 'post',
             redirect: {
              success: 'pages',
              failure: 'pages', // stay on the same page
            },
           },
           register: {
             endpoint: '/auth/sign-up',
             method: 'post',
           },
           logout: {
             endpoint: '/auth/sign-out',
             method: 'post',
           },
           requestPass: {
             endpoint: '/auth/request-pass',
             method: 'post',
           },
           resetPass: {
             endpoint: '/auth/reset-pass',
             method: 'post',
           },
        }),
      ],
      forms: {
       login: {
         strategy: 'email',  // strategy id key.
         rememberMe: true,   // whether to show or not the `rememberMe` checkbox
         showMessages: {     // show/not show success/error messages
         success: true,
         error: true
         }
       }  
      }
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

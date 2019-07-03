import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { corePages } from './pages';
import { coreComponents } from './components';
import { DynamicComponentCreatorService } from './services';
import { AuthService } from 'src/app/auth/services';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomHttpInterceptor } from '../interceptors/custom-http.interceptor';
import { AuthModule } from 'src/app/auth/auth.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    ...coreComponents,
    ...corePages
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
  ],
  exports: [
    AppRoutingModule,
    CoreComponent
  ],
  providers: [
    AuthService,
    DynamicComponentCreatorService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ]
})
export class CoreModule {
}

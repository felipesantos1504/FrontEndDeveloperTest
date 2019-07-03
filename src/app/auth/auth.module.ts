import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { authPages } from './pages';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    ...authPages
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
})
export class AuthModule { }

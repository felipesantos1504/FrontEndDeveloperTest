import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { usersComponents } from './components';
import { usersDirectives } from './directives';
import { usersPipes } from './pipes';
import { usersServices } from './services';
import { UsersRootComponent } from './users-root.component';
import { usersPages } from './pages';
import { UsersRoutingModule } from './users-routing.module';

/**
 * Este módulo é apenas para servir como base para criação de outro
 */
@NgModule({
    declarations: [
        ... usersComponents,
        ... usersDirectives,
        ... usersPages,
        ... usersPipes,
        UsersRootComponent
    ],
    imports: [
        UsersRoutingModule,
        SharedModule
    ],
    entryComponents: [
        /**
         * Entry components não funcionam em módulos lazy loaded adicionar no entry components
         * do shared ou do core module
         * https://github.com/angular/angular/issues/14324#issuecomment-433389833
         */
    ],
    providers: [
        ... usersServices
    ]
})
export class UsersModule { }

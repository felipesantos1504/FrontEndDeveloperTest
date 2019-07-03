import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';

import { AuthGuard } from 'guards/auth.guard';
import { UsersRootComponent } from './users-root.component';
import { UsersComponent, EditComponent } from './pages';

const defaultRoutes: Routes = [
  {
    path: '', component: UsersRootComponent, canActivate: [AuthGuard], children: [
      { path: '', component: UsersComponent, canActivate: [AuthGuard] },
      { path: ':id', component: EditComponent, canActivate: [AuthGuard] },
      // { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      // { path: ':id', component: RecipeDetailComponent },
      // { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
    ]
  },
  // Módulos aninhados devem ser colocados fora para funcionar!
  // { path: 'nested', loadChildren: './modules/feature-nested/feature-nested.module#FeatureNestedModule'},
];


@NgModule({
  imports: [
    RouterModule.forChild(defaultRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class UsersRoutingModule {

}

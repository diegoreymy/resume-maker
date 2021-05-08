import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
    },
    {
      path: 'admin',
      loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
      canActivate: [ AdminGuard ]
    },
    {
      path: '**',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
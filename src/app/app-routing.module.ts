import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'resume',
      loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumeModule)
    },
    {
      path: 'admin',
      loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
      canActivate: [ AdminGuard ]
    },
    {
      path: 'error',
      loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
    },
    {
      path: '**',
      loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
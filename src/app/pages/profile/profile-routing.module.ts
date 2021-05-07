import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { ProfileComponent } from './profile.component';

const routes: Routes = [{
  path: ':nickname',
  component: ProfileComponent
},
{
    path: '**',
    component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
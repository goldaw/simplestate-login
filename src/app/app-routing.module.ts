import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component:DashboardComponent,canActivate: [AuthGuard] },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }

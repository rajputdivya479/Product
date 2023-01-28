import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [MsalGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  ,
  { 
    path: "auth",
    component: MsalRedirectComponent
  },
]
const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: false,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? "enabled" : "disabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }

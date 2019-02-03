import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SwordBuilderComponent } from './sword-builder/sword-builder.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PremadesComponent } from './premades/premades.component';
import { AdminToolsComponent } from './admin-tools/admin-tools.component';

const routes: Routes = [
  {path:'home',component:LandingPageComponent},
  {path:'swordbuilder',component:SwordBuilderComponent},
  {path:'login',component:UserLoginComponent},
  {path:'premades',component:PremadesComponent},
  {path:'admin',component:AdminToolsComponent},

  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

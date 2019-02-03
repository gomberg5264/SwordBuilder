import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartModalComponent } from './sword-builder/partModal/partModal.component';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { SwordBuilderComponent } from './sword-builder/sword-builder.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PremadesComponent } from './premades/premades.component';
import { AdminToolsComponent } from './admin-tools/admin-tools.component';
import { PartMakerComponent } from './admin-tools/partMaker/partMaker.component';
import { PartListerComponent } from './admin-tools/partLister/partLister.component';

@NgModule({
   declarations: [
      AppComponent,
      PartModalComponent,
      SwordBuilderComponent,
      LandingPageComponent,
      PageNotFoundComponent,
      UserLoginComponent,
      PremadesComponent,
      AdminToolsComponent,
      PartMakerComponent,
      PartListerComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      DatabaseService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

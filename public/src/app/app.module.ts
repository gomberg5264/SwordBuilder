import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartModalComponent } from './sword-builder/partModal/partModal.component';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { SwordBuilderComponent } from './sword-builder/sword-builder.component';

@NgModule({
   declarations: [
      AppComponent,
      PartModalComponent,
      SwordBuilderComponent
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

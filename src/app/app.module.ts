import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsComponent } from './app.materials';
import { Route } from '@angular/router/src/config';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Services
import { NasaService } from './services/nasa.service';

import { AppComponent, AlertDialog } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NeoPageComponent, NeoDialog } from './neo-page/neo-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeoDatePageComponent } from './neo-date-page/neo-date-page.component';


const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'neo', component: NeoPageComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NeoPageComponent,
    DashboardComponent,
    NeoDatePageComponent,
    AlertDialog,
    NeoDialog
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsComponent,
    HttpModule,
    FormsModule
  ],
  entryComponents: [ AlertDialog, NeoDialog ],
  providers: [
    NasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

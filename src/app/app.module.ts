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
import { AuroraLiveService } from './services/aurora-live.service';
import { GoogleServicesService } from './services/google-services.service';

import { AppComponent, AlertDialog } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NeoPageComponent, NeoDialog } from './neo-page/neo-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuroraHuntingComponent } from './aurora-hunting/aurora-hunting.component';


const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'neo', component: NeoPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aurorahunting', component: AuroraHuntingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NeoPageComponent,
    DashboardComponent,
    AlertDialog,
    NeoDialog,
    AuroraHuntingComponent
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
    NasaService,
    AuroraLiveService,
    GoogleServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

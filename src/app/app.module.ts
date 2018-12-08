import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatArmComponent } from './components/cat-arm/cat-arm.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { LoadingHeaderComponent } from './components/loading-header/loading-header.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { InkComponent } from './components/ink/ink.component';
import { IntroTextComponent } from './components/intro-text/intro-text.component';
import { OctopusArmComponent } from './components/octopus-arm/octopus-arm.component';
import { PawsComponent } from './components/paws/paws.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChoicesComponent } from './pages/choices/choices.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinTheClubComponent } from './pages/join-the-club/join-the-club.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { WorksComponent } from './pages/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    CatArmComponent,
    LandingHeaderComponent,
    LoadingHeaderComponent,
    HomeHeaderComponent,
    InkComponent,
    IntroTextComponent,
    OctopusArmComponent,
    PawsComponent,
    SidebarComponent,
    ChoicesComponent,
    HomeComponent,
    JoinTheClubComponent,
    LandingComponent,
    LoadingComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Angular needs to know how the pieces of your application fit together and what other files
 * and libraries the app requires. This information is called metadata
 * Some of the metadata is in the @Component decorators that you added to your component classes.
 * Other critical metadata is in @NgModule decorators.
 * The most important @NgModule decorator annotates the top-level AppModule class.
 * The Angular CLI generated an AppModule class in src/app/app.module.ts when it created the project.
 * This is where you opt-in to the FormsModule.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngmodel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MessagesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

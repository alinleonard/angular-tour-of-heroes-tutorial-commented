/**
 * An Angular best practice is to load and configure the router in a separate,
 * top-level module that is dedicated to routing and imported by the root AppModule.
 * By convention, the module class name is AppRoutingModule and it belongs
 * in the app-routing.module.ts in the src/app folder.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/**
 * Routes tell the router which view to display when a user clicks a link
 * or pastes a URL into the browser address bar.
 * A typical Angular Route has two properties:
 * path: a string that matches the URL in the browser address bar
 * component: the component that the router should create when navigating to this route.
 * You intend to navigate to the HeroesComponent when the URL is something like localhost:4200/heroes.
 * Import the HeroesComponent so you can reference it in a Route.
 * Then define an array of routes with a single route to that component.
 */
const routes: Routes = [
  /**
   * When the app starts, the browsers address bar points to the web site's root.
   * That doesn't match any existing route so the router doesn't navigate anywhere.
   * The space below the <router-outlet> is blank.
   * To make the app navigate to the dashboard automatically, add the following route
   * to the AppRoutingModule.Routes array.
   */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

/**
 * You generally don't declare components in a routing module
 * so you can delete the @NgModule.declarations array and delete CommonModule references too.
 * You'll configure the router with Routes in the RouterModule so import those
 * two symbols from the @angular/router library.
 * Add an @NgModule.exports array with RouterModule in it. Exporting RouterModule
 * makes router directives available for use in the AppModule components that will need them.
 * AppRoutingModule looks like this now:
 */
@NgModule({
  /**
   * You first must initialize the router and start it listening for browser location changes.
   * Add RouterModule to the @NgModule.imports array and configure it with the routes in one step
   * by calling RouterModule.forRoot() within the imports array, like this:
   */
  /**
   * The method is called forRoot() because you configure the router at the application's root level.
   * The forRoot() method supplies the service providers and directives needed for routing,
   * and performs the initial navigation based on the current browser URL.
   */
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

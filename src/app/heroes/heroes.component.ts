import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'

/* https://next.angular.io/api/core/Component
 * You always import the Component symbol from the Angular core library
 * and annotate the component class with @Component.
 * @Component is a decorator function that specifies the Angular metadata for the component. 
 */
@Component({
  selector: 'app-heroes', // The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  templateUrl: './heroes.component.html', // The URL of a template file for an Angular component. If provided, do not supply an inline template using template.
  styleUrls: ['./heroes.component.css'] // One or more URLs for files containing CSS stylesheets to use in this component.
})

// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  /**
   * When the app starts, the selectedHero is undefined by design.
   * Binding expressions in the template that refer to properties
   * of selectedHero — expressions like {{selectedHero.name}} — must fail because 
   * there is no selected hero.
   * The fix
   * The component should only display the selected hero details if the selectedHero exists.
   * Wrap the hero detail HTML in a <div>. Add Angular's *ngIf directive
   * to the <div> and set it to selectedHero.
   */
  selectedHero: Hero;
  heroes: Hero[];

  /**
   * Reserve the constructor for simple initialization such as wiring constructor 
   * parameters to properties. The constructor shouldn't do anything. 
   * It certainly shouldn't call a function that makes HTTP requests to a remote server
   *  as a real data service would.
   * @param heroService 
   */
  constructor(private heroService: HeroService) { }

  /** https://next.angular.io/guide/lifecycle-hooks#oninit
   * The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component.
   * It's a good place to put initialization logic.
   */
  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    /**
     * Observable.subscribe() is the critical difference.
     * The previous version assigns an array of heroes to the component's heroes property. 
     * The assignment occurs synchronously, as if the server could return heroes
     * instantly or the browser could freeze the UI while it waited for the server's response.
     * That won't work when the HeroService is actually making requests of a remote server.
     * The new version waits for the Observable to emit the array of heroes— which could happen
     * now or several minutes from now. Then subscribe passes the emitted array to the callback,
     * which sets the component's heroes property.
     * This asynchronous approach will work when the HeroService requests heroes from the server.
     */
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}

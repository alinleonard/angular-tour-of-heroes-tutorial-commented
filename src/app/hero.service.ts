import { Injectable } from '@angular/core';
/**
 * https://next.angular.io/guide/http
 */
import { Observable, of } from 'rxjs'

import { Hero } from './hero';
/**
 * The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.
 * Removing data access from components means you can change your mind about
 * the implementation anytime, without touching any components. They don't know how the service works.
 */
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

/** https://next.angular.io/guide/dependency-injection
 * Notice that the new service imports the Angular Injectable
 * symbol and annotates the class with the @Injectable() decorator.
 * This marks the class as one that participates in the dependency injection system.
 * The HeroService class is going to provide an injectable service, and it can also
 * have its own injected dependencies. 
 */
/** https://next.angular.io/guide/providers
 * The @Injectable() decorator accepts a metadata object for the service,
 * the same way the @Component() decorator did for your component classes.
 */
/**
 * By default, the Angular CLI command ng generate service registers a provider
 * with the root injector for your service by including provider metadata in the @Injectable decorator.
 * If you look at the @Injectable() statement right before the HeroService class definition,
 *  you can see that the providedIn metadata value is 'root':
 */
/** 
 * When you provide the service at the root level, Angular creates a single,
 * shared instance of HeroService and injects into any class that asks for it.
 * Registering the provider in the @Injectable metadata also allows Angular to optimize
 * an app by removing the service if it turns out not to be used after all.
 */
@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    /** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
     * Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
     */
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

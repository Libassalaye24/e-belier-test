import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.paramMap.get('id'); // Get the "id" parameter value from the route
    return { title: id }; // Set the "title" property in the data object
  }
}

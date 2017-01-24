/*'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource: angular.resource.IResourceService) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);*/

  //todo: remove this

  import {Injectable} from '@angular/core';
  import {Http, Response} from '@angular/http';
  import {Observable} from 'rxjs/Rx'

  declare var angular: angular.IAngularStatic;
  import {downgradeInjectable} from '@angular/upgrade/static';

  import 'rxjs/add/operator/map';

  export interface PhoneData{
    name: string,
    snippet: string,
    images: string[]
  }

  @Injectable()
  export class Phone{
    constructor(private http:Http){}
    query(): Observable<PhoneData[]>{
      return this.http.get(`phones/phones.json`)
      .map((res: Response) => res.json());
    }
    get(id: string): Observable<PhoneData>{
      return this.http.get(`phones/${id}.json`)
        .map((res: Response) => res.json())
    }
  }  

  angular.module('core.phone')
    .factory('Phone', downgradeInjectable(Phone));

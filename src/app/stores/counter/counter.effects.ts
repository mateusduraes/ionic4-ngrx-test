import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  // // Listen for the 'LOGIN' action
  // @Effect()
  // login$: Observable<Action> = this.actions$.pipe(
  //   ofType('INCREMENT'),
  //   mergeMap(action =>
  //     of({ type: 'INCREMENT', payload: ++action. })      
  //   )
  // );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
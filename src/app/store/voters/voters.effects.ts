import {Injectable} from "@angular/core";
import * as VotersAction from './voters.actions';
import {catchError, map, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {VotersService} from "../../modules/voters/services/voters.service";

@Injectable()
export class VotersEffects {

  getVoters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VotersAction.getVotersAction),
      switchMap(() => this.votersService.voters$),
      map(voters => VotersAction.getVotersSuccessAction({voters})),
      catchError(error => {
        console.error(error.message);
        return of(VotersAction.getVotersFailureAction);
      }))
  );

  addVoter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VotersAction.addVoterAction),
      switchMap(({voter}) => this.votersService.addVoter(voter).pipe(map(() => voter))),
      map(voter => VotersAction.addVoterSuccessAction({voter})),
      catchError(error => {
        console.error(error.message);
        return of(VotersAction.addVoterFailureAction());
      }))
  );

  addVoterSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VotersAction.addVoterSuccessAction),
      map(() => VotersAction.getVotersAction()))
  );

  constructor(private actions$: Actions, private votersService: VotersService) {
  }
}

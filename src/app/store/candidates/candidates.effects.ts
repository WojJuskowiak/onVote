import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CandidatesService} from "../../modules/candidates/services/candidates.service";
import * as CandidatesAction from './candidates.actions';
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class CandidatesEffects {

  getCandidates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CandidatesAction.getCandidatesAction),
      switchMap(() => this.candidatesService.candidates$),
      map(candidates => CandidatesAction.getCandidatesSuccessAction({candidates})),
      catchError(error => {
        console.error(error.message);
        return of(CandidatesAction.getCandidatesFailureAction);
      }))
  );

  addCandidate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CandidatesAction.addCandidateAction),
      switchMap(({candidate}) => this.candidatesService.addCandidate(candidate).pipe(map(() => candidate))),
      map(candidate => CandidatesAction.addCandidateSuccessAction({candidate})),
      catchError(error => {
        console.error(error.message);
        return of(CandidatesAction.addCandidateFailureAction());
      }))
  );

  addCandidateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CandidatesAction.addCandidateSuccessAction),
      map(() => CandidatesAction.getCandidatesAction()))
  );

  constructor(private actions$: Actions, private candidatesService: CandidatesService) {
  }
}

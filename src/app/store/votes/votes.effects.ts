import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {VotersService} from "../../modules/voters/services/voters.service";
import {VotesService} from "../../modules/votes/services/votes.service";
import {catchError, map, of, switchMap, tap} from "rxjs";
import * as VotesAction from "./votes.actions";
import {getVotersAction} from "../voters/voters.actions";
import {Store} from "@ngrx/store";
import {RootState} from "../root/root.state";

@Injectable()
export class VotesEffects {
  getVotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VotesAction.getVotesAction),
      switchMap(() => this.votesService.votes$),
      map(votes => VotesAction.getVotesSuccessAction({votes})),
      catchError(error => {
        console.error(error.message);
        return of(VotesAction.getVotesFailureAction());
      })
    ));

  vote$ = createEffect(() => this.actions$.pipe(
    ofType(VotesAction.voteAction),
    switchMap(({vote}) => this.votesService.addVote(vote).pipe(map(() => vote))),
    switchMap(vote => this.votersService.vote(vote.voterId).pipe(map(() => vote))),
    map(vote => VotesAction.voteSuccessAction({vote})),
    catchError(error => {
      console.error(error.message);
      return of(VotesAction.voteFailureAction());
    }))
  );

  voteSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(VotesAction.voteSuccessAction),
    tap(() => this.store.dispatch(getVotersAction())),
    map(() => VotesAction.getVotesAction())
  ));


  constructor(private actions$: Actions, private votersService: VotersService, private votesService: VotesService, private store: Store<RootState>) {
  }
}

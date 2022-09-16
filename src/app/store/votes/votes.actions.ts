import {createAction, props} from "@ngrx/store";
import {Vote} from "../../modules/shared/models/vote.model";

export enum VotesActionType {
  GET_VOTES = '[Votes] Get Votes',
  GET_VOTES_SUCCESS = '[Votes] Get Votes Success',
  GET_VOTES_FAILURE = '[Votes] Get Votes Failure',
  VOTE = '[Votes] Vote',
  VOTE_SUCCESS = '[Votes] Vote Success',
  VOTE_FAILURE = '[Votes] Vote Failure'
}

export const getVotesAction = createAction(VotesActionType.GET_VOTES);

export const getVotesSuccessAction = createAction(VotesActionType.GET_VOTES_SUCCESS, props<{votes: Vote[]}>());

export const getVotesFailureAction = createAction(VotesActionType.GET_VOTES_FAILURE);

export const voteAction = createAction(VotesActionType.VOTE, props<{vote: Vote}>());

export const voteSuccessAction = createAction(VotesActionType.VOTE_SUCCESS, props<{vote: Vote}>());

export const voteFailureAction = createAction(VotesActionType.VOTE_FAILURE);

import {votesInitialState as initialState} from "./votes.state";
import {createReducer, on} from "@ngrx/store";
import * as VotesAction from "./votes.actions";

export const votesReducer = createReducer(
  initialState,
  on(VotesAction.voteSuccessAction, (state, {vote}) => ({
    ...state,
    votes: [...state.votes, vote],
    inProgress: false
  })),
  on(VotesAction.getVotesSuccessAction, (state, {votes}) => ({
    ...state,
    votes: votes,
    inProgress: false
  })),
  on(
    VotesAction.voteAction,
    VotesAction.getVotesAction,
    state => ({
      ...state,
      inProgress: true
    })),
  on(
    VotesAction.voteFailureAction,
    VotesAction.getVotesFailureAction,
    state => ({
      ...state,
      inProgress: false
    }))
)

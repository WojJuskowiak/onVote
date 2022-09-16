import {createReducer, on} from "@ngrx/store";
import {candidatesInitialState as initialState} from "./candidates.state";
import * as CandidatesAction from './candidates.actions';

export const candidatesReducer = createReducer(
  initialState,
  on(CandidatesAction.addCandidateSuccessAction, (state, {candidate}) => ({
    ...state,
    candidates: [...state.candidates, candidate],
    inProgress: true,
  })),
  on(CandidatesAction.getCandidatesSuccessAction, (state, {candidates}) => ({
    ...state,
    candidates: candidates,
    inProgress: false,
  })),
  on(CandidatesAction.getCandidatesAction,
    CandidatesAction.addCandidateAction,
    state => ({
      ...state,
      inProgress: true,
    })),
  on(CandidatesAction.addCandidateFailureAction,
    CandidatesAction.getCandidatesFailureAction,
    state => ({
      ...state,
      inProgress: false,
    })),
)

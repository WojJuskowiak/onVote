import {createReducer, on} from "@ngrx/store";
import {votersInitialState as initialState} from "../voters/voters.state";
import * as VotersAction from "../voters/voters.actions";

export const votersReducer = createReducer(
  initialState,
  on(VotersAction.addVoterSuccessAction, (state, {voter}) => ({
    ...state,
    voters: [...state.voters, voter],
    inProgress: true,
  })),
  on(VotersAction.getVotersSuccessAction, (state, {voters}) => ({
    ...state,
    voters: voters,
    inProgress: false,
  })),
  on(VotersAction.getVotersAction,
    VotersAction.addVoterAction,
    state => ({
      ...state,
      inProgress: true,
    })),
  on(VotersAction.addVoterFailureAction,
    VotersAction.getVotersFailureAction,
    state => ({
      ...state,
      inProgress: false,
    })),
)

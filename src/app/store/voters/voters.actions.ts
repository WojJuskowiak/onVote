import {createAction, props} from "@ngrx/store";
import {Voter} from "../../modules/shared/models/voter.model";

export enum VotersActionType {
  ADD_VOTER = '[Voters] Add Voter',
  ADD_VOTER_SUCCESS = '[Voters] Add Voter Success',
  ADD_VOTER_FAILURE = '[Voters] Add Voter Failure',
  GET_VOTERS = '[Voters] Get Voters',
  GET_VOTERS_SUCCESS = '[Voters] Get Voters Success',
  GET_VOTERS_FAILURE = '[Voters] Get Voters Failure'
}

export const addVoterAction = createAction(VotersActionType.ADD_VOTER, props<{name: string}>());

export const addVoterSuccessAction = createAction(VotersActionType.ADD_VOTER_SUCCESS, props<{voter: Voter}>());

export const addVoterFailureAction = createAction(VotersActionType.ADD_VOTER_FAILURE)

export const getVotersAction = createAction(VotersActionType.GET_VOTERS);

export const getVotersSuccessAction = createAction(VotersActionType.GET_VOTERS_SUCCESS, props<{voters: Voter[]}>());

export const getVotersFailureAction = createAction(VotersActionType.GET_VOTERS_FAILURE);

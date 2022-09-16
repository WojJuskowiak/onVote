import {createAction, props} from "@ngrx/store";
import {Candidate} from "../../modules/shared/models/candidate.model";

export enum CandidatesActionType {
  ADD_CANDIDATE = '[Candidates] Add Candidate',
  ADD_CANDIDATE_SUCCESS = '[Candidates] Add Candidate Success',
  ADD_CANDIDATE_FAILURE = '[Candidates] Add Candidate Failure',
  GET_CANDIDATES = '[Candidates] Get Candidates',
  GET_CANDIDATES_SUCCESS = '[Candidates] Get Candidates Success',
  GET_CANDIDATES_FAILURE = '[Candidates] Get Candidates Failure'
}

export const addCandidateAction = createAction(CandidatesActionType.ADD_CANDIDATE, props<{candidate: Candidate}>());

export const addCandidateSuccessAction = createAction(CandidatesActionType.ADD_CANDIDATE_SUCCESS, props<{candidate: Candidate}>());

export const addCandidateFailureAction = createAction(CandidatesActionType.ADD_CANDIDATE_FAILURE)

export const getCandidatesAction = createAction(CandidatesActionType.GET_CANDIDATES);

export const getCandidatesSuccessAction = createAction(CandidatesActionType.GET_CANDIDATES_SUCCESS, props<{candidates: Candidate[]}>());

export const getCandidatesFailureAction = createAction(CandidatesActionType.GET_CANDIDATES_FAILURE);

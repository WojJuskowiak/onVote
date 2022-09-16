import {createFeatureSelector} from "@ngrx/store";
import {CandidatesState} from "./candidates.state";

export const selectCandidates = (state: CandidatesState) => state.candidates;

export const selectCandidatesInProgress = (state: CandidatesState) => state.inProgress;

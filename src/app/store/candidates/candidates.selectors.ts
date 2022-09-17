import {CandidatesState} from "./candidates.state";
import {RootState} from "../root/root.state";
import {StoreFeatureKey} from "../shared/store-feature-key.enum";
import {createSelector} from "@ngrx/store";
import {selectRootState} from "../root/root.selectors";

const selectCandidatesState = createSelector(
  selectRootState,
  rootState => rootState[StoreFeatureKey.CANDIDATES]
);

export const selectCandidates = createSelector(selectCandidatesState, candidatesState => candidatesState.candidates);

export const selectCandidatesInProgress = createSelector(selectCandidatesState, candidatesState => candidatesState.inProgress);

import {StoreFeatureKey} from "../shared/store-feature-key.enum";
import {createSelector} from "@ngrx/store";
import {selectRootState} from "../root/root.selectors";

const selectVotesState = createSelector(
  selectRootState,
  rootState => rootState[StoreFeatureKey.VOTES]
);

export const selectVotes = createSelector(selectVotesState, votesState => votesState.votes);

export const selectVotesInProgress = createSelector(selectVotesState, votesState => votesState.inProgress);

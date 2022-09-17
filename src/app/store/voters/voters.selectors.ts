import {VotersState} from "./voters.state";
import {RootState} from "../root/root.state";
import {StoreFeatureKey} from "../shared/store-feature-key.enum";
import {createSelector} from "@ngrx/store";
import {selectRootState} from "../root/root.selectors";

const selectVotersState = createSelector(
  selectRootState,
  rootState => rootState[StoreFeatureKey.VOTERS]
);

export const selectVoters = createSelector(
  selectVotersState,
  votersState => votersState.voters
);

export const selectVotersInProgress = createSelector(
  selectVotersState,
  votersState => votersState.inProgress
);

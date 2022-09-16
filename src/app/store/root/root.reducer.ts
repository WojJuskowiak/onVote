import {combineReducers} from "@ngrx/store";
import {candidatesReducer} from "../candidates/candidates.reducer";
import {votersReducer} from "../voters/voters.reducer";
import {StoreFeatureKey} from "../shared/store-feature-key.enum";
import {votesReducer} from "../votes/votes.reducer";

export const rootReducer = combineReducers({
  [StoreFeatureKey.VOTERS]: votersReducer,
  [StoreFeatureKey.CANDIDATES]: candidatesReducer,
  [StoreFeatureKey.VOTES]: votesReducer
})

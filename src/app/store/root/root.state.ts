import {votersInitialState, VotersState} from "../voters/voters.state";
import {candidatesInitialState, CandidatesState} from "../candidates/candidates.state";
import {votesInitialState, VotesState} from "../votes/votes.state";
import {StoreFeatureKey} from "../shared/store-feature-key.enum";

export interface RootState {
  [StoreFeatureKey.VOTERS]: VotersState,
  [StoreFeatureKey.CANDIDATES]: CandidatesState,
  [StoreFeatureKey.VOTES]: VotesState,
}

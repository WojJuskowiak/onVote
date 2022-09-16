import {VotersState} from "./voters.state";

export const selectVoters = (votersState: VotersState) => votersState.voters;

export const selectVotersInProgress = (votersState: VotersState) => votersState.inProgress;

import {VotesState} from "./votes.state";

export const selectVotes = (votesState: VotesState) => votesState.votes;

export const selectVotesInProgress = (votesState: VotesState) => votesState.inProgress;

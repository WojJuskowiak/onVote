import {Vote} from "../../modules/shared/models/vote.model";
import {WithProgress} from "../shared/models/with-progress.model";

export interface VotesState extends WithProgress {
  votes: Vote[];
}

export const votesInitialState: VotesState = {
  votes: [],
  inProgress: false
}

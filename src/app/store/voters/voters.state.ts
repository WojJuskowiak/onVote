import {Voter} from "../../modules/shared/models/voter.model";
import {WithProgress} from "../shared/models/with-progress.model";

export interface VotersState extends WithProgress {
  voters: Voter[];
}

export const votersInitialState: VotersState = {
  voters: [],
  inProgress: false,
}

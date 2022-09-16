import {Candidate} from "../../modules/shared/models/candidate.model";
import {WithProgress} from "../shared/models/with-progress.model";

export interface CandidatesState extends WithProgress {
  candidates: Candidate[];
}

export const candidatesInitialState: CandidatesState = {
  candidates: [],
  inProgress: false,
}

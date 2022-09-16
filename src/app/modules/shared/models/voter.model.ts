import {Candidate} from "./candidate.model";

export interface Voter {
  id: number;

  name: string;

  hasVoted: boolean;
}

import {Component, Input} from '@angular/core';
import {addCandidateAction} from "../../../../../store/candidates/candidates.actions";
import {Candidate} from "../../../../shared/models/candidate.model";
import {Store} from "@ngrx/store";
import {RootState} from "../../../../../store/root/root.state";
import {Vote} from "../../../../shared/models/vote.model";

@Component({
  selector: 'onv-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.scss']
})
export class CandidatesTableComponent {
  @Input() candidates: Candidate[] = [];

  @Input() candidatesInProgress = true;

  @Input() votes: Vote[] = [];

  @Input() votesInProgress = true;

  isAddFormOpen = false;

  constructor(private store: Store<RootState>) {
  }

  toggleAddForm(isOpen: boolean): void {
    this.isAddFormOpen = isOpen;
  }

  addCandidate(name: string): void {
    this.isAddFormOpen = false;
    this.store.dispatch(addCandidateAction({name}))
  }

  getNumberOfVotesForCandidate(candidate: Candidate): number {
    return this.votes.filter(vote => vote.candidateId === candidate.id).length;
  }
}

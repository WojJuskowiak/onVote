import {Component, Input} from '@angular/core';
import {Voter} from "../../../../shared/models/voter.model";
import {RootState} from "../../../../../store/root/root.state";
import {Store} from "@ngrx/store";
import {addVoterAction} from "../../../../../store/voters/voters.actions";

@Component({
  selector: 'onv-voters-table',
  templateUrl: './voters-table.component.html',
  styleUrls: ['./voters-table.component.scss']
})
export class VotersTableComponent {
  @Input() voters: Voter[] = [];

  @Input() votersInProgress = true;

  isAddFormOpen = false;

  constructor(private store: Store<RootState>) {
  }

  toggleAddForm(isOpen: boolean): void {
    this.isAddFormOpen = isOpen;
  }

  addVoter(name: string): void {
    this.isAddFormOpen = false;
    this.store.dispatch(addVoterAction({name}))
  }
}

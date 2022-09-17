import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {RootState} from "./store/root/root.state";
import {addCandidateAction} from "./store/candidates/candidates.actions";
import {addVoterAction} from "./store/voters/voters.actions";
import {voteAction} from "./store/votes/votes.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'onVote';

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(addCandidateAction({candidate: {name: 'candidate', id: 0}}));
    this.store.dispatch(addVoterAction({voter: {name: 'voter', id: 0, hasVoted: false}}));
    this.store.dispatch(voteAction({vote: {voterId: 0, candidateId: 0}}));
  }
}

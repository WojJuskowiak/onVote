import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractComponentWithData} from "../../../shared/components/abstract-component-with-data";
import {RootState} from "../../../../store/root/root.state";
import {Store} from "@ngrx/store";
import {Voter} from "../../../shared/models/voter.model";
import {Nullable} from "../../../shared/utils/models/nullable.type";
import {isNull} from "../../../shared/utils/functions/is-null";
import {Candidate} from "../../../shared/models/candidate.model";
import {voteAction} from "../../../../store/votes/votes.actions";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'onv-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent extends AbstractComponentWithData {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, store: Store<RootState>, changeDetectorRef: ChangeDetectorRef) {
    super(store, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      voter: [null, [Validators.required]],
      candidate: [null, [Validators.required]]
    })
  }

  get voterControl(): FormControl<Voter> {
    return this.form.controls['voter'] as FormControl<Voter>;
  }

  private get voterId(): number {
    return this.voterControl.value.id;
  }

  get candidateControl(): FormControl<Candidate> {
    return this.form.controls['candidate'] as FormControl<Candidate>;
  }

  private get candidateId(): number {
    return this.candidateControl.value.id
  }

  get isDataLoading(): boolean {
    return this.votersInProgress || this.candidatesInProgress || this.votesInProgress;
  }

  get filteredVoters(): Voter[] {
    return this.voters.filter(voter => !voter.hasVoted);
  }

  nameTransform = (person: Nullable<Voter | Candidate>) => {
    if(isNull(person)) {
      return '';
    }
    return person.name;
  }

  vote(): void {
    const { candidateId, voterId } = this;
    this.store.dispatch(voteAction({vote: {candidateId, voterId}}));
    this.form.reset();
  }

}

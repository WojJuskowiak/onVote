import {select, Store} from "@ngrx/store";
import {RootState} from "../../../store/root/root.state";
import {ChangeDetectorRef, Directive, OnDestroy, OnInit} from "@angular/core";
import {getCandidatesAction} from "../../../store/candidates/candidates.actions";
import {getVotersAction} from "../../../store/voters/voters.actions";
import {getVotesAction} from "../../../store/votes/votes.actions";
import {Observable, Subscription} from "rxjs";
import {Voter} from "../models/voter.model";
import {Candidate} from "../models/candidate.model";
import {Vote} from "../models/vote.model";
import {selectVoters, selectVotersInProgress} from "../../../store/voters/voters.selectors";
import {selectCandidates, selectCandidatesInProgress} from "../../../store/candidates/candidates.selectors";
import {selectVotes, selectVotesInProgress} from "../../../store/votes/votes.selectors";

enum StoreDataPropertyName {
  VOTERS = 'voters',
  CANDIDATES = 'candidates',
  VOTES = 'votes',
  VOTERS_IN_PROGRESS = 'votersInProgress',
  CANDIDATES_IN_PROGRESS = 'candidatesInProgress',
  VOTES_IN_PROGRESS = 'votesInProgress'
}

type StoreDataType = Voter[] | Candidate[] | Vote[] | boolean;

@Directive()
export abstract class AbstractComponentWithData implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  voters: Voter[] = [];

  candidates: Candidate[] = [];

  votes: Vote[] = [];

  votersInProgress = true;

  candidatesInProgress = true;

  votesInProgress = true;

  protected constructor(protected store: Store<RootState>, protected changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.dispatchGetActions();
    this.initStoreData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

  private dispatchGetActions(): void {
    this.store.dispatch(getCandidatesAction());
    this.store.dispatch(getVotersAction());
    this.store.dispatch(getVotesAction());
  }

  private initStoreData(): void {
    this.initVoters();
    this.initCandidates();
    this.initVotes();
    this.initVotersInProgress();
    this.initCandidatesInProgress();
    this.initVotesInProgress();
  }

  private initVoters(): void {
    this.subscribeToData(this.store.pipe(select(selectVoters)), StoreDataPropertyName.VOTERS);
  }

  private initCandidates(): void {
    this.subscribeToData(this.store.pipe(select(selectCandidates)), StoreDataPropertyName.CANDIDATES);
  }

  private initVotes(): void {
    this.subscribeToData(this.store.pipe(select(selectVotes)), StoreDataPropertyName.VOTES);
  }

  private initVotersInProgress(): void {
    this.subscribeToData(this.store.pipe(select(selectVotersInProgress)), StoreDataPropertyName.VOTERS_IN_PROGRESS);
  }

  private initCandidatesInProgress(): void {
    this.subscribeToData(this.store.pipe(select(selectCandidatesInProgress)), StoreDataPropertyName.CANDIDATES_IN_PROGRESS);
  }

  private initVotesInProgress(): void {
    this.subscribeToData(this.store.pipe(select(selectVotesInProgress)), StoreDataPropertyName.VOTES_IN_PROGRESS);
  }

  private subscribeToData(observable: Observable<StoreDataType>, dataName: StoreDataPropertyName): void {
    const subscription = observable.subscribe(observableData => {
      this.setProperProperty(dataName, observableData);
      this.changeDetectorRef.markForCheck();
    })
    this.subscriptions.push(subscription);
  }

  private setProperProperty(dataName: StoreDataPropertyName, observableData: StoreDataType): void {
    switch (dataName) {
      case StoreDataPropertyName.VOTERS:
        this.voters = observableData as Voter[];
        return;
      case StoreDataPropertyName.CANDIDATES:
        this.candidates = observableData as Candidate[];
        return;
      case StoreDataPropertyName.VOTES:
        this.votes = observableData as Vote[];
        return;
      default:
        this[dataName] = observableData as boolean;
        return;
    }
  }
}

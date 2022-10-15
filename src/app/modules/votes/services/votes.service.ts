import {Injectable} from "@angular/core";
import {BehaviorSubject, delay, first, map, Observable, tap} from "rxjs";
import {Vote} from "../../shared/models/vote.model";

@Injectable({providedIn: 'root'})
export class VotesService {
  private static readonly LOCAL_STORAGE_VOTES_KEY = 'votes';

  private _votes$ = new BehaviorSubject<Vote[]>(JSON.parse(localStorage.getItem(VotesService.LOCAL_STORAGE_VOTES_KEY) ?? '[]') ?? [])

  get votes$(): Observable<Vote[]> {
    return this._votes$.pipe(delay(1000));
  }

  addVote(vote: Vote): Observable<void> {
    return this.votes$.pipe(
      first(),
      tap(votes => this.updateVotes([...votes, vote])),
      map(() => void 0));
  }

  private updateVotes(votes: Vote[]): void {
    localStorage.setItem(VotesService.LOCAL_STORAGE_VOTES_KEY, JSON.stringify(votes));
    this._votes$.next(votes);
  }

  getNumberOfVotesByCandidateId$(candidateId: number): Observable<number> {
    return this.votes$.pipe(
      map(votes => votes.filter(vote => vote.candidateId === candidateId).length)
    );
  }
}

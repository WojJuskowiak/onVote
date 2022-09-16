import {Injectable} from "@angular/core";
import {delay, map, Observable, of, tap} from "rxjs";
import {Vote} from "../../shared/models/vote.model";

@Injectable({providedIn: 'root'})
export class VotesService {
  private static readonly LOCAL_STORAGE_VOTES_KEY = 'votes';

  get votes$(): Observable<Vote[]> {
    return of(JSON.parse(localStorage.getItem(VotesService.LOCAL_STORAGE_VOTES_KEY) ?? '[]')).pipe(delay(1000));
  }

  addVote(vote: Vote): Observable<void> {
    return this.votes$.pipe(
      tap(votes => this.updateVotes([...votes, vote])),
      map(() => void 0));
  }

  private updateVotes(votes: Vote[]): void {
    localStorage.setItem(VotesService.LOCAL_STORAGE_VOTES_KEY, JSON.stringify(votes));
  }

  getNumberOfVotesByCandidateId$(candidateId: number): Observable<number> {
    return this.votes$.pipe(
      map(votes => votes.filter(vote => vote.candidateId === candidateId).length)
    );
  }
}

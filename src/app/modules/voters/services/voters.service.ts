import {Injectable} from "@angular/core";
import {delay, map, Observable, of, tap} from "rxjs";
import {Voter} from "../../shared/models/voter.model";
import {isUndefined} from "lodash";

@Injectable({providedIn: 'root'})
export class VotersService {
  private static readonly LOCAL_STORAGE_VOTERS_KEY = 'voters';

  get voters$(): Observable<Voter[]> {
    return of(JSON.parse(localStorage.getItem(VotersService.LOCAL_STORAGE_VOTERS_KEY) ?? '[]')).pipe(delay(1000));
  }

  addVoter(voter: Voter): Observable<void> {
    return this.voters$.pipe(
      tap(voters => this.updateVoters([...voters, voter])),
      map(() => void 0));
  }

  private updateVoters(voters: Voter[]): void {
    localStorage.setItem(VotersService.LOCAL_STORAGE_VOTERS_KEY, JSON.stringify(voters));
  }

  vote(voterId: number): Observable<void> {
    return this.voters$.pipe(
      tap(voters => this.doVote(voters, voterId)),
      map(() => void 0)
    );
  }

  private doVote(voters: Voter[], voterId: number): void {
    const votingVoter = voters.find(voter => voter.id === voterId);
    if (isUndefined(votingVoter)) {
      console.error('Voter not found.');
      return;
    }
    votingVoter.hasVoted = true;
    this.updateVoters(voters);
  }
}

import {Injectable} from "@angular/core";
import {BehaviorSubject, delay, first, map, Observable, tap} from "rxjs";
import {Voter} from "../../shared/models/voter.model";
import {isUndefined} from "lodash";

@Injectable({providedIn: 'root'})
export class VotersService {
  private static readonly LOCAL_STORAGE_VOTERS_KEY = 'voters';

  _voters$ = new BehaviorSubject<Voter[]>(JSON.parse(localStorage.getItem(VotersService.LOCAL_STORAGE_VOTERS_KEY) ?? '[]') ?? []);

  get voters$(): Observable<Voter[]> {
    return this._voters$.pipe(delay(1000));
  }

  addVoter(name: string): Observable<Voter> {
    return this._voters$.pipe(
      first(),
      map(voters => {
        const id = this.getNextId(voters);
        const voter: Voter = {id, name};
        this.updateVoters([...voters, voter]);
        return voter;
      }));
  }

  private updateVoters(voters: Voter[]): void {
    localStorage.setItem(VotersService.LOCAL_STORAGE_VOTERS_KEY, JSON.stringify(voters));
    this._voters$.next(voters);
  }

  private getNextId(voters: Voter[]): number {
    const ids = voters.map(voter => voter.id);
    return ids.reduce((previous, current) => (previous > current) ? previous : current, -1) + 1;
  }
}

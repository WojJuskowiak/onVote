import {Injectable} from "@angular/core";
import {BehaviorSubject, delay, filter, first, map, Observable, of} from "rxjs";
import {Candidate} from "../../shared/models/candidate.model";

@Injectable({providedIn: 'root'})
export class CandidatesService {
  private static readonly LOCAL_STORAGE_CANDIDATES_KEY = 'candidates';

  private _candidates$ = new BehaviorSubject<Candidate[]>(JSON.parse(localStorage.getItem(CandidatesService.LOCAL_STORAGE_CANDIDATES_KEY) ?? '[]') ?? []);

  get candidates$(): Observable<Candidate[]> {
    return this._candidates$.pipe(delay(1000));
  }

  addCandidate(name: string): Observable<Candidate> {
    return this.candidates$.pipe(
      first(),
      map(candidates => {
        const id = this.getNextId(candidates);
        const candidate = {id, name};
        this.updateCandidates([...candidates, candidate]);
        return candidate;
      }));
  }

  private getNextId(candidates: Candidate[]): number {
    const ids = candidates.map(candidate => candidate.id);
    return ids.reduce((previous, current) => previous > current ? previous : current, -1) + 1;
  }

  private updateCandidates(candidates: Candidate[]): void {
    localStorage.setItem(CandidatesService.LOCAL_STORAGE_CANDIDATES_KEY, JSON.stringify(candidates));
    this._candidates$.next(candidates);
  }
}

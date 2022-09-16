import {Injectable} from "@angular/core";
import {delay, map, Observable, of, tap} from "rxjs";
import {Candidate} from "../../shared/models/candidate.model";

@Injectable({providedIn: 'root'})
export class CandidatesService {
  private static readonly LOCAL_STORAGE_CANDIDATES_KEY = 'candidates';

  get candidates$(): Observable<Candidate[]> {
    return of(JSON.parse(localStorage.getItem(CandidatesService.LOCAL_STORAGE_CANDIDATES_KEY) ?? '[]')).pipe(delay(1000));
  }

  addCandidate(candidate: Candidate): Observable<void> {
    return this.candidates$.pipe(
      tap(candidates => this.updateCandidates([...candidates, candidate])),
      map(() => void 0));
  }

  private updateCandidates(candidates: Candidate[]) {
    localStorage.setItem(CandidatesService.LOCAL_STORAGE_CANDIDATES_KEY, JSON.stringify(candidates));
  }
}

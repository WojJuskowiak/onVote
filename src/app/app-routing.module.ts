import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {VoteComponent} from "./modules/main/components/vote/vote.component";
import {VotersCandidatesComponent} from "./modules/main/components/voters-candidates/voters-candidates.component";

export enum RoutePath {
  MAIN = '',
  VOTE = 'vote',
  VOTERS_CANDIDATES = 'voters-candidates'
}

const routes: Routes = [
  { path: RoutePath.MAIN, pathMatch: 'prefix', redirectTo: RoutePath.VOTERS_CANDIDATES },
  { path: RoutePath.VOTE, component: VoteComponent },
  { path: RoutePath.VOTERS_CANDIDATES, component: VotersCandidatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

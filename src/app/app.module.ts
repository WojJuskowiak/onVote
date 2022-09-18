import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {rootReducer} from "./store/root/root.reducer";
import {VotersEffects} from "./store/voters/voters.effects";
import {CandidatesEffects} from "./store/candidates/candidates.effects";
import {VotesEffects} from "./store/votes/votes.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {NavigationComponent} from './modules/main/components/navigation/navigation.component';
import {RouterOutlet} from "@angular/router";
import {VotersCandidatesComponent} from './modules/main/components/voters-candidates/voters-candidates.component';
import {VoteComponent} from './modules/main/components/vote/vote.component';
import {AppRoutingModule} from "./app-routing.module";
import { VotersTableComponent } from './modules/main/components/voters-candidates/voters-table/voters-table.component';
import { CandidatesTableComponent } from './modules/main/components/voters-candidates/candidates-table/candidates-table.component';
import { TableHeaderWithAddComponent } from './modules/shared/components/table-header-with-add/table-header-with-add.component';
import { AddFormComponent } from './modules/shared/components/add-form/add-form.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VotersCandidatesComponent,
    VoteComponent,
    VotersTableComponent,
    CandidatesTableComponent,
    TableHeaderWithAddComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({root: rootReducer}),
    EffectsModule.forRoot([VotersEffects, CandidatesEffects, VotesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

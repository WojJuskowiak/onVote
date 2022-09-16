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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({root: rootReducer}),
    EffectsModule.forRoot([VotersEffects, CandidatesEffects, VotesEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {RootState} from "../../../../store/root/root.state";
import {AbstractComponentWithData} from "../../../shared/components/abstract-component-with-data";

@Component({
  selector: 'onv-voters-candidates',
  templateUrl: './voters-candidates.component.html',
  styleUrls: ['./voters-candidates.component.scss']
})
export class VotersCandidatesComponent extends AbstractComponentWithData implements OnInit{

  constructor(store: Store<RootState>, changeDetectorRef: ChangeDetectorRef) {
    super(store, changeDetectorRef);
  }
}

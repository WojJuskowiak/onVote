import {Component, Input, OnInit} from '@angular/core';
import {Voter} from "../../../../shared/models/voter.model";

@Component({
  selector: 'onv-voters-table',
  templateUrl: './voters-table.component.html',
  styleUrls: ['./voters-table.component.scss']
})
export class VotersTableComponent implements OnInit {
  @Input() voters: Voter[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}

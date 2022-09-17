import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersCandidatesComponent } from './voters-candidates.component';

describe('VotersCandidatesComponent', () => {
  let component: VotersCandidatesComponent;
  let fixture: ComponentFixture<VotersCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotersCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

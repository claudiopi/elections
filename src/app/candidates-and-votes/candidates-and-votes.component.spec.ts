import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconModule, IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { IgxPieChartModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { CandidatesAndVotesComponent } from './candidates-and-votes.component';

describe('CandidatesAndVotesComponent', () => {
  let component: CandidatesAndVotesComponent;
  let fixture: ComponentFixture<CandidatesAndVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesAndVotesComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxIconModule, IgxCardModule, IgxGridModule, IgxPieChartModule, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesAndVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { YearModel } from './models/uselections-data/year-model';
import { StateService } from './services/state.service';
import { USElectionsDataService } from './services/uselections-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public uSElectionsDataYearModel: YearModel[] = [];

  constructor(
    private uSElectionsDataService: USElectionsDataService,
    private stateService: StateService,
  ) {}

  ngOnInit() {
    this.uSElectionsDataService.getYearModelList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.uSElectionsDataYearModel = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public navDrawerItemClick(item: YearModel) {
    this.stateService.currentlyChosenYear.next(item.year);
  }
}

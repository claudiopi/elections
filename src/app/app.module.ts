import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesAndVotesComponent } from './candidates-and-votes/candidates-and-votes.component';
import { IgxIconModule, IgxCardModule, IgxGridModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { IgxPieChartModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesAndVotesComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxCardModule,
    IgxPieChartModule,
    IgxGridModule,
    IgxCategoryChartModule,
    FormsModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

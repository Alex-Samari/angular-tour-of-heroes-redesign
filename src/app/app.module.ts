import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeroService } from "./hero.service";
import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroSearchComponent } from "./hero-search.component";
import { ButtonModule } from "@progress/kendo-angular-buttons";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ArtistAttributionsComponent } from './artist-attributions/artist-attributions.component';
import { ListViewModule } from '@progress/kendo-angular-listview';






@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true,
    }),
    ButtonModule,
    LayoutModule,
    BrowserAnimationsModule,
    NavigationModule,
    InputsModule,
    IconsModule,
    DropDownsModule,
    ListViewModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    ArtistAttributionsComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}

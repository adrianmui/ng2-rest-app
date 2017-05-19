import { WidgetDetailsFormComponent } from './widgets/widget-details/widget-details-form';
import {
  WidgetDetailsDescriptionComponent
} from './widgets/widget-details/widget-details-description/widget-details-description.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { ItemsService } from './shared';
import { WidgetsService } from './shared';

import { ReviewsComponent} from './reviews';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { FeaturedItemComponent } from './items/featured-item/featured-item.component';

import { WidgetsComponent } from './widgets';
import { WidgetDetailsComponent } from './widgets';
import { WidgetsListComponent } from './widgets';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    FeaturedItemComponent,
    WidgetsComponent,
    ReviewsComponent,
    WidgetDetailsComponent,
    WidgetDetailsDescriptionComponent,
    WidgetDetailsFormComponent,
    WidgetsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule
  ],
  providers: [ItemsService, WidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

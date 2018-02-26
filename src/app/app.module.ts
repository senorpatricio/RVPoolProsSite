import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainImageComponent } from './main-image/main-image.component';
import { FilterComponent } from './filter/filter.component';

import { DealersService } from './services/dealers.service';
import { DealerCardComponent } from './dealer-card/dealer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    MainImageComponent,
    FilterComponent,
    DealerCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DealersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

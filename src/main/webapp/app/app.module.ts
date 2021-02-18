import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ControfinadomesSharedModule } from 'app/shared/shared.module';
import { ControfinadomesCoreModule } from 'app/core/core.module';
import { ControfinadomesAppRoutingModule } from './app-routing.module';
import { ControfinadomesHomeModule } from './home/home.module';
import { ControfinadomesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ControfinadomesSharedModule,
    ControfinadomesCoreModule,
    ControfinadomesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ControfinadomesEntityModule,
    ControfinadomesAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ControfinadomesAppModule {}

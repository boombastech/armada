import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AvailableShipsComponent} from './available-ships/available-ships.component';
import {StubAvailableShipService} from './available-ships/available-ships.service';
import {RouterModule, Routes} from '@angular/router';
import {FactionSelectorComponent} from './faction-selector/faction-selector.component';
import {FleetBuilderComponent} from './fleet-builder/fleet-builder.component';
import {ChosenShipComponent} from './chosen-ship/chosen-ship.component';
import {FactionsService} from './factions.service';
import {ChosenShipUpgradeComponent} from './chosen-ship-upgrade/chosen-ship-upgrade.component';
import {UpgradeService} from './upgrade.service';
import {AvailableUpgradesComponent} from './available-upgrades/available-upgrades.component';
import {LightboxComponent} from './lightbox/lightbox.component';
import {AvailableShipComponent} from 'app/available-ship/available-ship.component';
import {FleetValidationService} from './fleet-builder/fleet-validation.service';
import { ValidationResultsComponent } from './validation-results/validation-results.component';
import { AvailableShipTypeComponent } from './available-ship-type/available-ship-type.component';
import { FleetBuilderNavComponent } from './fleet-builder-nav/fleet-builder-nav.component';

const appRoutes: Routes = [
  {
    path: 'ships/:faction',
    component: FleetBuilderComponent,
    data: {title: 'Armada'}
  },
  {
    path: 'factions',
    component: FactionSelectorComponent,
    data: {title: 'Armada'}
  },
  {
    path: '',
    redirectTo: 'factions',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AvailableShipComponent,
    AvailableShipsComponent,
    FactionSelectorComponent,
    FleetBuilderComponent,
    ChosenShipComponent,
    ChosenShipUpgradeComponent,
    AvailableUpgradesComponent,
    LightboxComponent,
    ValidationResultsComponent,
    AvailableShipTypeComponent,
    FleetBuilderNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StubAvailableShipService,
    FactionsService,
    UpgradeService,
    FleetValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

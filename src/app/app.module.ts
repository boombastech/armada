import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AvailableShipComponent} from './available-ships/available-ships.component';
import {StubAvailableShipService} from './available-ships/available-ships.service';
import {RouterModule, Routes} from '@angular/router';
import {FactionSelectorComponent} from './faction-selector/faction-selector.component';
import {FleetBuilderComponent} from './fleet-builder/fleet-builder.component';
import {FleetBuilderService} from './fleet-builder/fleet-builder.service';
import {ChosenShipComponent} from './chosen-ship/chosen-ship.component';
import {FactionsService} from './factions.service';
import {ChosenShipUpgradeComponent} from './chosen-ship-upgrade/chosen-ship-upgrade.component';
import {FleetCostComponent} from './fleet-cost/fleet-cost.component';
import {UpgradeService} from './upgrade.service';
import {AvailableUpgradesComponent} from './available-upgrades/available-upgrades.component';

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
    FactionSelectorComponent,
    FleetBuilderComponent,
    ChosenShipComponent,
    ChosenShipUpgradeComponent,
    FleetCostComponent,
    AvailableUpgradesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StubAvailableShipService,
    FleetBuilderService,
    FactionsService,
    UpgradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

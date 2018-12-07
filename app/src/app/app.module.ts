import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { GeoipifyService } from './service/geoipify.service';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { IpInfoComponent } from './components/ip-info/ip-info.component';
import { MapHeaderComponent } from './components/map-header/map-header.component';
import { DomainQueryComponent } from './components/domain-query/domain-query.component';

export function initApp(geoIP: GeoipifyService) {
    return () => geoIP.init();
}

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    AppBarComponent,
    IpInfoComponent,
    MapHeaderComponent,
    DomainQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDBB5Xe6osywf1KKAiOoRWY8FZxZjSaw2Y'
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [
      GoogleMapsAPIWrapper,
      GeoipifyService,
      { provide: APP_INITIALIZER, useFactory: initApp, deps: [GeoipifyService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

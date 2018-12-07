import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgmMap, GoogleMapsAPIWrapper } from '@agm/core';
import { GeoipifyService } from './service/geoipify.service';
import { IpInfo } from './model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public clientInfo: IpInfo;

    public destInfo: IpInfo;

    constructor(private geoIP: GeoipifyService) {}

    ngOnInit() {
        this.clientInfo = this.geoIP.clientInfo;
        console.log(this.clientInfo);
    }

    onNewDestInfo(event) {
        this.destInfo = event;
        console.log(this.destInfo);
    }
}

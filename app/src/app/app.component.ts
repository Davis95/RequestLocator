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

    public serverInfo: IpInfo;

    // We use IP stack to query an IP address/domain name
    // private ipStackUrl = 'http://api.ipstack.com/';
    // private ipStackKey = 'a9c4d5d721bbbfaf5f326d582617a47b';

    constructor(private geoIP: GeoipifyService) {}

    ngOnInit() {
        this.clientInfo = this.geoIP.clientInfo;
        console.log(this.clientInfo);
    }

    handleClick(event: MouseEvent) {

    }
}

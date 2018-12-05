import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgmMap, GoogleMapsAPIWrapper } from '@agm/core';
import * as DNS from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public query: string;

    public clientInfo: any;

    public serverInfo: any;

    // We use IP stack to query an IP address/domain name
    private ipStackUrl = 'http://api.ipstack.com/';
    private ipStackKey = 'a9c4d5d721bbbfaf5f326d582617a47b';

    constructor(private http: HttpClient, private googleMap: GoogleMapsAPIWrapper) {}

    handleClick(event: MouseEvent) {
        // Get client ip and location information
        this.http.get(`${this.ipStackUrl}check?access_key=${this.ipStackKey}`)
            .subscribe((clientData: any) => {
                this.clientInfo = {
                    ip: clientData.ip,
                    lat: clientData.latitude,
                    long: clientData.longitude
                };
                console.log(this.clientInfo);
                // Use ipStack (since we don't know if the user will give IP address or domain)
                this.http.get(`${this.ipStackUrl + this.query}?access_key=${this.ipStackKey}`)
                .subscribe((serverData: any) => {
                    this.serverInfo = {
                        ip: serverData.ip,
                        lat: serverData.latitude,
                        long: serverData.longitude
                    };
                    console.log(this.serverInfo);
                    // this.updateMap();
                }, error => console.log(error));
            }, error => console.log(error));
    }

    updateMap() {
        this.googleMap.createMarker({
            position: {
                lat: this.clientInfo.lat,
                lng: this.clientInfo.long
            },
            clickable: false
        }, true);
    }
}

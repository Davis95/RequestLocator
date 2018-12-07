import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GeoipifyService } from '../../service/geoipify.service';
import { MarkerLabel } from '@agm/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

    @Input()
    public clientLat: number;

    @Input()
    public clientLng: number;

    @Input()
    public destLat: number;

    @Input()
    public destLng: number;

    public clientLabel: MarkerLabel;

    public destLabel: MarkerLabel;

    constructor() {}

    ngOnInit() {
        this.clientLabel = {
            color: 'black',
            fontSize: '40px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            text: 'Your IP'
        };

        this.destLabel = {
            color: 'black',
            fontSize: '40px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            text: 'Destination'
        };
    }
}

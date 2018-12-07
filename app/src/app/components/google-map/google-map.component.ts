import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GeoipifyService } from '../../service/geoipify.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {

    @Input()
    public clientLat: number;

    @Input()
    public clientLng: number;

    @Input()
    public serverLat: number;

    @Input()
    public serverLng: number;

    constructor() {}
}

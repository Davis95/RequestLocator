import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IpInfo } from '../../model/models';

@Component({
  selector: 'app-map-header',
  templateUrl: './map-header.component.html',
  styleUrls: ['./map-header.component.scss']
})
export class MapHeaderComponent {

    @Input()
    public clientInfo: IpInfo;

    @Output()
    public newDestInfo = new EventEmitter<IpInfo>();

    public destInfo: IpInfo;

    public query;

    onQueryDone(event) {
        this.query = event.host;
        this.destInfo = event;
        this.newDestInfo.emit(this.destInfo);
    }
}

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IpInfo } from '../../model/models';
import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.scss'],
  animations: [
      trigger('newInfo', [
            state('normal', style({ backgroundColor: 'white'})),
            state('changed', style({ backgroundColor: 'lightcoral'})),
            transition('normal <=> changed', [ animate('0.3s ease-in-out')])
      ])
  ]
})
export class IpInfoComponent implements OnChanges {

    @Input()
    public title: string;

    @Input()
    public info: IpInfo;

    public showChange = false;

    ngOnChanges(changes) {
        if (changes.info && !changes.info.firstChange) {
            this.showChange = true;

            setTimeout(() => { this.showChange = false; }, 500);
        }
    }
}

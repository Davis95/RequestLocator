import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IpInfo } from '../../model/models';
import { GeoipifyService } from '../../service/geoipify.service';

@Component({
  selector: 'app-domain-query',
  templateUrl: './domain-query.component.html',
  styleUrls: ['./domain-query.component.scss']
})
export class DomainQueryComponent {

    @Output()
    public queryDone: EventEmitter<IpInfo> = new EventEmitter<IpInfo>();

    public suggestions = [
        'www.universitycoop.com',
        'www.khanacademy.com',
        'www.cs.utexas.edu',
        'www.google.com',
        'www.tcu.edu',
        'www.mit.org',
        'www.lsu.edu'
    ];

    public query: string;

    constructor(private geoIP: GeoipifyService) {}

    onSuggestionClick(event) {
        this.query = event.target.textContent;
        this.executeQuery();
    }

    executeQuery() {
        const info = { host: this.query };
        this.geoIP.requestServerInfo(this.query)
            .subscribe((data: any) => {
                console.log(data);
                if (data.error) {
                    this.queryDone.emit({ error: data.error });
                } else {
                    console.log(Object.assign(info, data));
                    this.queryDone.emit(Object.assign(info, data));
                }
            });
    }
}

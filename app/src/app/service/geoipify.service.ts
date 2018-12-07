import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpInfo } from '../model/models';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoipifyService {

    private baseUrl = 'https://geoipify.whoisxmlapi.com/api/v1?apiKey=at_TPkXGMbAyBGgbE7rghcbr0NSZrjYI';
    private client: IpInfo;

    constructor(private http: HttpClient) {}

    public init() {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl)
                .subscribe((data: any) => {
                    this.client = {
                        ip: data.ip,
                        location: data.location,
                        error: null
                    };
                    resolve();
                }, error => { throw new Error('Could not determine client location'); });
            });
    }

    public requestServerInfo(domainIp: string): Observable<any> {
        return this.http.get(`${this.baseUrl}&domain=${domainIp}`);
    }

    public get clientInfo(): IpInfo {
        return this.client;
    }

}

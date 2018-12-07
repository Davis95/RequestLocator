export interface IpInfo {
    host?: string;
    ip?: string;
    location?: IpLocation;
    error?: any;
}

export interface IpLocation {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
}

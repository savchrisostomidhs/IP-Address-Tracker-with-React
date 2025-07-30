export interface GeoData {
    ip: string,
    location: {
        country: string,
        city: string,
        lat: number,
        lng: number,
        timezone: string
    },
    isp: string
}
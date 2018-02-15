export interface AuroraLocationsModel {
    id: string;
    name: string;
    description: string;
    subdivision: string;
    country: string;
    lat: string;
    long: string;
}
export interface AceDataModel {
    date: string;
    kp: string;
    kp1hour: string;
    kp4hour: string;
    colour: {
        kp: string;
        kp4hour: string;
        kp1hout: string;
    };
}

export interface WeatherDataModel {
    temperature: string;
    cloud: string;
    rain: string;
    humidity: string;
    fog: string;
    symbol: string;
    wind: {
        speed: string;
        direction: string;
    };
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moonphase: string;
    date: string;
    location: {
        lat: string;
        long: string;
        name: string;
        state: string;
        country: string;
    };
}

export interface LookUpModel {
    absolute_magnitude_h: number;
    close_approach_data: ApproachDataModel[];
    estimated_diameter: {
        feet: {
            estimated_diameter_max: number;
            estimated_diameter_min: number;
        },
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        meters: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        miles: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        }
    };
    is_potentially_hazardous_asteroid: boolean;
    name: string;
    neo_reference_id: string;
    nasa_jpl_url: string;
    orbital_data: OrbitalDataModel;
}


export interface ApproachDataModel {
    miss_distance: {
        astronomical: string;
        lunar: string;
        kilometers: string;
        miles: string;
    };
    relative_velocity: {
        kilometers_per_hour: string;
        kilometers_per_second: string;
        miles_per_hour: string;
    };
    orbiting_body: string;
    close_approach_date: string;
    epoch_date_close_approach: number;
}

export interface OrbitalDataModel {
    aphelion_distance: string;
    ascending_node_longtitude: string;
    eccentricity: string;
    epoch_osculation: string;
    equinox: string;
    inclination: string;
    jupiter_tisserand_invariant: string;
    mean_anomaly: string;
    mean_motion: string;
    minimum_orbit_intersection: string;
    orbit_determination_date: string;
    orbit_id: string;
    orbit_uncertainty: string;
    orbital_period: string;
    perihelion_argument: string;
    perihelion_distance: string;
    perihelion_time: string;
    semi_major_axis: string;
}

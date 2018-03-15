export interface MarsRoverPicture {
    photos: [Photos];
}

interface Photos {
    id: number;
    sol: number;
    camera: {
        id: Number,
        name: string;
        rover_id: string;
        full_name: string;
    };
    img_src: string;
    earth_date: string;
    rover: Rover;
}

interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: [
        {
            name: string,
            full_name: string
        }
    ];
}

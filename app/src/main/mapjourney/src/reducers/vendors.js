/**
 *
 * Created by yzzhao on 5/25/16.
 */


export default function Vendor(state, action) {
    switch (action.type) {
        case 'MALAYSIA':

            return Vendors['MALAYSIA']
        case 'THAILAND':
            return Vendors['THAILAND']
        default:
            return Vendors['MALAYSIA']
    }
}


const Vendors = {

    'MALAYSIA': {
        name: 'Ingram Micro(Brightpoint)',
        lat: 3.139298,
        lng: 101.686652,
        stations: [
            {
                name: 'Ingram Micro (Malaysia) Sdn Bhd - Selangor',
                lat: 3.111905,
                lng: 101.630098,
                zoom: 13
            },
            {
                name: 'Ingram Micro (Malaysia) Sdn Bhd  - Kuantan',
                lat: 3.816047,
                lng: 103.335044,
                zoom: 13
            },
            {
                name: 'Ingram Micro (Malaysia) Sdn Bhd  - Sabah',
                lat: 5.970255,
                lng: 116.075114,
                zoom: 13
            },
            {
                name: 'SCT Distribution Sdn Bhd',
                lat: 3.318177,
                lng: 101.576492,
                zoom: 13
            }
        ]
    }

}


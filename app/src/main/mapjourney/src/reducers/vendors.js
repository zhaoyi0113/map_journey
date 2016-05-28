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

export const Vendors = {

    'MALAYSIA': {
        lat: -5.970255,
        lng: 103.075114,
        zoom: 6,
        vendors: [
            {
                name: 'Ingram Micro(Brightpoint)',
                stations: [
                    {
                        name: 'Ingram Micro (Malaysia) Sdn Bhd - Selangor',
                        lat: 3.111905,
                        lng: 101.630098
                    },
                    {
                        name: 'Ingram Micro (Malaysia) Sdn Bhd  - Kuantan',
                        lat: 3.816047,
                        lng: 103.335044
                    },
                    {
                        name: 'Ingram Micro (Malaysia) Sdn Bhd  - Sabah',
                        lat: 5.970255,
                        lng: 116.075114
                    },
                    {
                        name: 'SCT Distribution Sdn Bhd',
                        lat: 3.318177,
                        lng: 101.576492
                    }
                ]
            },
            {
                name: 'Mobile Technic',
                stations: [
                    {
                        name: 'MYM-001 Mobile Technic Petaling Jaya',
                        lat: 3.105280,
                        lng: 101.646896
                    },
                    {
                        name: 'MYM-002 Mobile Technic Penang',
                        lat: 5.415016,
                        lng: 100.331354
                    },
                    {
                        name: 'MYM-003 Mobile Technic Ipoh CI',
                        lat: 4.625084,
                        lng: 101.118829
                    },
                    {
                        name: 'MYM-004 Mobile Technic Kota Bharu',
                        lat: 6.105469,
                        lng: 102.259910
                    }
                ]
            }
        ]
    }

}


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
    'MALAYSIA': {lat: 3.139298,
        lng: 101.686652 },
    'THAILAND': {lat: 3.139298,
        lng: 101.686652 }

}


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
    lat: 8.970255,
    lng: 103.075114,
    zoom: 6,
    vendors: [
      {
        id: 0,
        name: 'Select Vendor',
        stations: []
      },
      {
        id: 1,
        name: 'Ingram Micro(Brightpoint)',
        icon: 'public/icons/icon_copy2.png',
        head_icon: 'public/icons/editor_flag_triangle_notification_glyph copy 4.png',
        lat: 3.088074,
        lng: 101.637523,
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
          },
          {
            name: 'SNS DOT NET Sdn Bhd',
            lat: 5.336647,
            lng: 103.142800
          },
          {
            name: 'Star Connect Communication',
            lat: 4.233185,
            lng: 103.421772
          },
          {
            name: 'GTL Electronic S/B',
            lat: 3.085179,
            lng: 101.523406
          },
          {
            name: 'M.P.C Mobile Professional Centre',
            lat: 1.536338,
            lng: 110.337753
          },
          {
            name: 'Utakhas',
            lat: 1.454949,
            lng: 110.458804
          },
          {
            name: 'Alphacon',
            lat: 4.400461,
            lng: 113.990901
          },{
            name: 'Ingram Micro (Malaysia) Sdn Bhd  - Kuching',
            lat: 1.507080,
            lng: 110.375334

          },{
            name: 'FUTURE POWER SDN BHD',
            lat: 3.144204,
            lng: 101.709861
          }
        ]
      },
      {
        id: 2,
        name: 'Mobile Technic',
        icon: 'public/icons/icon copy 24.png',
        lat: 3.106414,
        lng: 101.646771,
        head_icon: 'public/icons/editor_flag_triangle_notification_glyph copy 3.png',
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
      },
      {
        id: 3,
        name: 'OSR(OMC)',
        icon: 'public/icons/icon copy 12.png',
        lat: 3.063379,
        lng: 101.695077,
        head_icon: 'public/icons/editor_flag_triangle_notification_glyph copy 5.png',
        stations: [
          {
            name: 'MYO-001 OSR Seri Petaling',
            lat: 3.063542,
            lng: 101.695086
          },
          {
            name: 'MYO-002 OSR Melaka',
            lat: 2.190361,
            lng: 102.250563
          },
          {
            name: 'MYO-010 Asia Mobile',
            lat: 3.143612,
            lng: 101.710639
          }
        ]
      }
    ]
  }

}


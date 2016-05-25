export default function country(state, action) {
  switch (action.type) {
    case 'MALAYSIA':
      return countries['MALAYSIA']
    case 'THAILAND':
      return countries['THAILAND']
    default:
      return countries['MALAYSIA']
  }
}


const countries = {
	'MALAYSIA': {lat: 3.139298,
      			lng: 101.686652,
                zoom: 13},
    'THAILAND': {lat: 3.139298,
      			lng: 101.686652,
                zoom: 13 }

}


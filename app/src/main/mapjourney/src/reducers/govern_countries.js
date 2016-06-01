/**
 * Created by yzzhao on 6/1/16.
 */

import {governCountries,GOVERN_COUNTRIES} from '../actions/actions'

export default function GovernCountries(state=[], action){
  switch(action.type){
    case GOVERN_COUNTRIES:
      return countries
    default:
      return countries
  }
}


const countries=[
  {
    name: 'MALAYSIA',
    background: 'country 01.png'
  },{
    name: 'THAILAND',
    background: 'country 02.png'
  },{
    name: 'SINGAPORE',
    background: 'country 03.png'
  }
]
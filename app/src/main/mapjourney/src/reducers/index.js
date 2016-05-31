/**
 * Created by yzzhao on 5/25/16.
 */

import {combineReducers} from 'redux'
import country from './reducers'
import vendors from './vendors'
import vendor_selection from './vendor_selection'
import MapCategorySelection  from './map_category_selection'

const Countries = combineReducers({
  country: country,
  vendors: vendors,
  selectVendor: vendor_selection,
  mapCategorySelection: MapCategorySelection
})

export default Countries

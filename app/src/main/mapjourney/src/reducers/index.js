/**
 * Created by yzzhao on 5/25/16.
 */

import {combineReducers} from 'redux'
import country from './reducers'
import vendors from './vendors'
import vendor_selection from './vendor_selection'
import MapCategorySelection  from './map_category_selection'
import GovernCountries from './govern_countries'

const Countries = combineReducers({
  country: country,
  vendors: vendors,
  selectVendor: vendor_selection,
  mapCategorySelection: MapCategorySelection,
  countries: GovernCountries
})

export default Countries

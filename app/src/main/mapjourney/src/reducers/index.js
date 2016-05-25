/**
 * Created by yzzhao on 5/25/16.
 */

import { combineReducers } from 'redux'
import country from './reducers'
import vendors from './vendors'

const Countries = combineReducers({
    country: country,
    vendors: vendors
})

export default Countries

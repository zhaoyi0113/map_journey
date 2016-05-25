/**
 * Created by yzzhao on 5/25/16.
 */

import { combineReducers } from 'redux'
import country from './reducers'

const Countries = combineReducers({
    country: country
})

export default Countries

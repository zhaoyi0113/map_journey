/**
 * Created by yzzhao on 5/27/16.
 */

import {Vendors} from './vendors'

export default function VendorSelection(state, action){
    switch(action.type){
        case 'SELECT_VENDOR':
            return action.vendor
        default:
            return {name:'ALL', label:'Select Vendor'}
    }
}

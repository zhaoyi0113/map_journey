/**
 * Created by yzzhao on 5/27/16.
 */

import {Vendors} from './vendors'

export default function VendorSelection(state, action) {
  switch (action.type) {
    case 'SELECT_VENDOR':
      return action.vendor
    default:
      if (state == null) {
        return {id: 0, name: 'Select Vendor', label: 'Select Vendor'}
      }
      return state
  }
}

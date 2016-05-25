/**
 *
 * Created by yzzhao on 5/25/16.
 */

export const VENDOR_LIST_FILTER = 'VENDOR_LIST_FILTER'

export const VendorListFilter = {
    SHOW_ALL: 'SHOW_ALL'
}

export function showVendor(filter) {
    return { type: VENDOR_LIST_FILTER, filter}
}

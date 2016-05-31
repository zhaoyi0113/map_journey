/**
 * Created by yzzhao on 5/31/16.
 */


export default function MapCategorySelection(state, action) {
  switch (action.type) {
    case 'MAP_CATEGORY_SELECT':
      return action.category
    default:
      if(state == null){
        return {}
      }
      return state
  }
}
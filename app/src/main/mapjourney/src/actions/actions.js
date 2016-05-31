export const MAP_CATEGORY_SELECT = 'MAP_CATEGORY_SELECT'

export const selectMapCategory = (category) => {
  return {
    type: MAP_CATEGORY_SELECT,
    category
  }
}


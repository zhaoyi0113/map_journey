export const MAP_CATEGORY_SELECT = 'MAP_CATEGORY_SELECT'

export const selectMapCategory = (category) => {
  return {
    type: MAP_CATEGORY_SELECT,
    category
  }
}

export const GOVERN_COUNTRIES = 'GOVERN_COUNTRIES'

export const governCountries = (countries) =>{
  return {
    type: GOVERN_COUNTRIES,
    countries
  }
}
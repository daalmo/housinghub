const initialState = {
  errors: "",
  searchResults: {
    pagination: {
      page: 0,
      results_per_page: 0,
      totalNumberOfResults: 0,
    },
    results: [],
  },
  query: {
    pagination: {
      page: 0,
      results_per_page: 0,
    },
    searchFields: {
      min_rent: 0,
      bathrooms: 0,
      bedrooms: 0,
      date_available: "",
      housing_type: [],
      max_rent: 0,
      zip_code: [],
      deposit_needed: false,
      credit_report_needed: false,
      near_bus_stop: false,
      pets_allowed: false,
      school_district: ""
    },
  },
};

const searchState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGINATION_QUERY":
      return Object.assign({}, state, {
        ...state,
        query: {
          pagination: {
            ...state.query.pagination,
            [action.fieldName]: action.newValue,
          },
          searchFields: {
            ...state.query.searchFields,
          },
        },
      });
    case "SET_SEARCHFIELDS_QUERY":
      if (Array.isArray(state.query.searchFields[action.fieldName])) {
        let index = state.query.searchFields[action.fieldName].indexOf(
          action.newValue
        );
        if (index > -1) {
          return Object.assign({}, state, {
            ...state,
            query: {
              pagination: {
                ...state.query.pagination,
              },
              searchFields: {
                ...state.query.searchFields,
                [action.fieldName]: state.query.searchFields[
                  action.fieldName
                ].filter((item) => item !== action.newValue),
              },
            },
          });
        } else {
          return Object.assign({}, state, {
            ...state,
            query: {
              pagination: {
                ...state.query.pagination,
              },
              searchFields: {
                ...state.query.searchFields,
                [action.fieldName]: [
                  ...state.query.searchFields[action.fieldName],
                  action.newValue,
                ],
              },
            },
          });
        }
      } else {
        return Object.assign({}, state, {
          ...state,
          query: {
            pagination: {
              ...state.query.pagination,
            },
            searchFields: {
              ...state.query.searchFields,
              [action.fieldName]: action.newValue,
            },
          },
        });
      }
    case "SET_PAGINATION_RESULTS":
      return Object.assign({}, state, {
        ...state,
        searchResults: {
          ...state.searchResults,
          pagination: {
            ...state.searchResults.pagination,
            [action.fieldName]: action.newValue,
          },
        },
      });
    case "SET_SEARCH_RESULTS":
      return Object.assign({}, state, {
        ...state,
        searchResults: {
          results: [...action.resultList],
          pagination: {
            ...state.searchResults.pagination,
          },
        },
      });
    default:
      return state;
  }
};

export default searchState;

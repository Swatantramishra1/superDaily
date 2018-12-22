export const MAINREDUCER = (state = { resData: [], resDataCopy: [], searchHistory: [], isFilterOpen: false, setDeliveryTIme: -1, setRating: -1 }, action) => {
    switch (action.type) {
        case 'SET_RES_DATA':
            return {
                ...state,
                resData: action.data,
                resDataCopy: action.data
            };
        case 'RE_SET_RES_DATA':
            return {
                ...state,
                resDataCopy: action.data
            };
        case 'SET_FILTER':
            return {
                ...state,
                isFilterOpen: action.data
            };
        case 'SET_SEARCH_HISTORY':
            return {
                ...state,
                searchHistory: action.data
            };
        case 'SET_DELIVERY_TIME':
            return {
                ...state,
                setDeliveryTIme: action.data
            };
        case 'SET_RATING':
            return {
                ...state,
                setRating: action.data
            };

        default:
            return state;
    }
};
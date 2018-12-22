import axios from 'axios';

import Config from '../../Config/Api';

export const setResData = (data) => ({
    type: 'SET_RES_DATA',
    data
	})
export const setDeliveryTime = (data) => ({
    type: 'SET_DELIVERY_TIME',
    data
	})
	export const setRating = (data) => ({
    type: 'SET_RATING',
    data
  })
  
  export const reSetResData = (data) => ({
    type: 'RE_SET_RES_DATA',
    data
	});
	export const setFilterData = (data) => ({
    type: 'SET_FILTER',
    data
	});
	export const setSearchHistory = (data) => ( {
		type:'SET_SEARCH_HISTORY',
		data
	})
  export const togglePreloader = (data) => ({
    type: 'TOGGLE_PRELOADER',
    data
  });

  export const getData = () => {
	return function(dispatch) {
		dispatch(togglePreloader(true));
		axios({
			method: 'get',
			url: `${Config.api.base_url}${Config.api.getDetails}`
	})
		.then(response => {
			console.log(response);
				dispatch(togglePreloader(false));
				dispatch(setResData(response.data));
		})
		.catch((error) => {
			// Have to define error message >> later
		})
	}
};

  
 
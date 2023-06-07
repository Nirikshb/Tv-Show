import axios from 'axios';

export const fetchShows = async () => {
  try {
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
    //creating  a new array for fetching data
    console.log(response);
    return response.data.map((entry) => entry.show);
    
  } catch (error) {
    throw new Error('Error fetching shows');
  }
};

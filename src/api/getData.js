import axios from 'axios';

const fetchData = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/');
  return res.data;
};

export default fetchData;

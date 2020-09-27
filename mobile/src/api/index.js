import axios from 'axios';

const BASE = 'https://crazye.herokuapp.com';

export async function getHelp(type) {
  return await axios.get(`${BASE}/api/help/${type}`);
}

import axios from 'axios';
import {getUniqueId} from 'react-native-device-info';

export const getHashtagsForFilter = async (filter) => {
  try {
    const res = await axios.get('https://crazye.herokuapp.com/api/hashtag/', {
      params: {
        deviceId: getUniqueId(),
        filter,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

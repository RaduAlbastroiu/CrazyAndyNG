import axios from 'axios';
import {getUniqueId} from 'react-native-device-info';

export const getFeedback = async (filter) => {
  try {
    console.log(filter);
    const res = await axios.get('https://crazye.herokuapp.com/api/feedback/', {
      params: {
        deviceId: getUniqueId(),
        filter,
      },
    });

    return res.data.found;
  } catch (err) {
    console.log(err);
  }
};

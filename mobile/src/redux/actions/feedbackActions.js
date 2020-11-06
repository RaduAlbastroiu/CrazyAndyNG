import axios from 'axios';

export const getFeedback = async (filter) => {
  try {
    console.log(filter);
    const res = await axios.get('https://crazye.herokuapp.com/api/feedback/', {
      params: {
        deviceId: 'someDeviceId',
        filter,
      },
    });

    return res.data.found;
  } catch (err) {
    console.log(err);
  }
};

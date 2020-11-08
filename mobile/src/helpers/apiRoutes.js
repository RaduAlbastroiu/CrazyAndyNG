export const baseUrl = 'https://crazye.herokuapp.com/api/';
('');
export const getImageUrl = (productId, imageId, deviceId) => {
  return baseUrl + `product/${productId}/image/${imageId}?deviceId=${deviceId}`;
};

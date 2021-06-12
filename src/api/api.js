import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
};

// export function makeGetImages(categoryId) {
//   return function(url) {
//     axios({
//       method: 'GET',
//       url,
//       headers,
//     });
//   };
// }

export function getImages(url) {
  axios({
    method: 'GET',
    url,
    headers,
  });
}
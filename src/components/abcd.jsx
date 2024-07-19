import axios from 'axios';

// Axios to GET data
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// Axios to POST data
axios.post('https://api.example.com/data', { key: 'value' })
  .then(response => console.log(response.data))
  .catch(error => {
    if (error.response) {
      // Server responded with a status outside the 200 range
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      // No response received
      console.error('Error request:', error.request);
    } else {
      // Something else caused the error
      console.error('Error message:', error.message);
    }
  });

const axios = require('axios');

async function testRegister() {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      username: 'admin',
      password: 'admin'
    });
    console.log('Success:', response.data);
  } catch (error) {
    console.log('Error:', error.response?.data || error.message);
  }
}

testRegister(); 
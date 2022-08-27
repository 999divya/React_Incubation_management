import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:5500'
});

/*

import axios from './api/axios';

const REGISTER_URL = '/register--> the endpoint for registration in the backend api.

const response = await axios.post(REGISTER_URL,
    JSON.stringify({user,pwd}),{  // --> the payload which is the data we are sending//
        headers:{'Content-Type':'application/json},
        withCredentials:true
    });

console.log(response.data);
console.log(response.asscessToken);
console.log(JSON.stringify(response));
*/
import axios from 'axios';

const BASE_URL = 'http://localhost/test';

const Test_URL = `${BASE_URL}/test.php`;

export const getTestData = (requestParams) => {
    return axios.get(Test_URL, {
        params: requestParams
    });
}

export const postTestData = (requestParams) => {
    return axios.post(Test_URL, requestParams);
}

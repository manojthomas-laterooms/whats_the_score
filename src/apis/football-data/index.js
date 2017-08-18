import fetch from 'node-fetch';
import queryStringify from '../utils/queryStringify';

const footballDataQuery = {
    fixtures: () => ({
        type: 'fixtures',
        method: 'GET',
        path: '445/fixtures',
    })
};

const footballDataApi = options =>
    queryObj =>
        fetch(`${options.baseUrl}${queryObj.path}`, {
            method: queryObj.method,
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': options.auth_token,
            },
        }).then(x => x.json());

export default footballDataApi;
export { footballDataQuery };

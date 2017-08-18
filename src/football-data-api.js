import footballDataApi from './apis/football-data';

export default footballDataApi({ baseUrl: 'http://api.football-data.org/v1/', auth_token: process.env.AUTHTOKEN });
export { footballDataQuery } from './apis/football-data';

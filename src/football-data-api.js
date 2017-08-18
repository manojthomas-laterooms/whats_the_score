import footballDataApi from './apis/football-data';

export default footballDataApi({ baseUrl: 'http://api.football-data.org/v1/', auth_token: process.env.AUTH_TOKEN });
export { footballDataQuery } from './apis/football-data';

import football_data, { Query as FootballDataQuery } from './football-data';

const resolver = Object.assign(
    {
        Query: Object.assign({}, FootballDataQuery),
    },
    football_data
);

export default resolver;

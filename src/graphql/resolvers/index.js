import footballData, { Query as FootballDataQuery } from './football-data';

const resolver = Object.assign(
    {
        Query: Object.assign({}, FootballDataQuery),
    },
    footballData
);

export default resolver;

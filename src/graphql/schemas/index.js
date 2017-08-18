import FootballData from './football-data';

const Query = `
    type Query {
        football_data: FootballData
    }

    schema {
        query: Query
    }
`;

export default [Query, ...FootballData];

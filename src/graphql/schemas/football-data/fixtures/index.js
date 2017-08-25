const Fixtures = `
    type Result {
        goalsHomeTeam: Int
        goalsAwayTeam: Int
    }

    type Fixture {
        date: String
        status: String
        homeTeamName: String
        awayTeamName: String
        result: Result
    }

    type Fixtures {
        count: Int!
        results: [Fixture]
    }
`;

export default Fixtures;

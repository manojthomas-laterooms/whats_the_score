import footballDataApi, { footballDataQuery } from '../../../../football-data-api';

export default() => Promise.all([
    footballDataApi(footballDataQuery.fixtures())
]).then(([fixturesResult]) => {

    console.log(require('util').inspect(fixturesResult.fixtures.slice(0, 1), { depth: null }));

    return {
        count: fixturesResult.count,
        results: fixturesResult.fixtures
    };
});

import footballDataApi, { footballDataQuery } from '../../../../football-data-api';

export default() => Promise.all([
    footballDataApi(footballDataQuery.fixtures())
]).then(([fixtures]) => {

    console.log(fixtures);

    return {
        count: 1000
    };
});

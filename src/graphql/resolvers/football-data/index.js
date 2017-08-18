import getFixtures from './getFixtures';

// eslint-disable-next-line import/prefer-default-export
export const Query = {
    football_data: () => ({
        fixtures: () => getFixtures()
    }),
};

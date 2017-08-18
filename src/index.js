import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';

import graphqlSchema from './graphql';

const app = express();
const { PORT = 3000 } = process.env;

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema: graphqlSchema,
    })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/status', (req, res) => {
    res.status(200).send('Im OK!!');
});

app.listen(PORT);

import './env';
import './passport';
import schema from './schema';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
const path = require('path');
const cors = require('cors');
import { authenticateJwt, generateToken } from './passport';
import { upload } from './upload';
const { query } = require('../sql/mybatis');
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({ schema, context: ({ request }) => ({ request, query }) });

server.express.use(cors());
server.express.use(logger('dev'));
server.express.use(authenticateJwt);
server.start({ port: PORT }, () => console.log(`Server running on  http://localhost:${PORT}`));

server.express.get('/getToken', async (req, res) => {
  try {
    const token = generateToken(req.query.id);
    return res.send(token);
  } catch (err) {}
});

// $env:NODE_ENV="dev"; yarn dev

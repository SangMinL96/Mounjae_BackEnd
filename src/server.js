import "./env"
import "./passport";
import schema from "./schema"
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan"
import passport from "passport";
import { authenticateJwt, generateToken } from "./passport";
const {query} = require('../sql/mybatis')
const PORT = process.env.PORT||4000;
const server = new GraphQLServer({schema,context: ({ request }) => ({ request,query })});
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../Helympic_Front/data/avatar/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.originalname+".jpg") // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
var upload = multer({ storage: storage })




  


server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.start({ port: PORT }, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);

server.express.get('/getToken', async ( req, res ) => {
  try{
    const token = generateToken(req.query.id)
     return res.send(token)
  }catch(err){

  }
  

});
server.express.post('/upload',upload.single('photo'),({ req, res, next }) => {
   console.log(req)
   console.log(next)
  }
);
// $env:NODE_ENV="dev"; yarn dev
const poolMaria = require('../../../config/mariadb');
export default {
    Query:{
        hello:async(_,args)=>{
           const {TEST_ID}=args.param;
           const connection =await poolMaria.getConnection();
           try{
            const data = await connection.query('select * from mounjea.test')
            return [{
              TEST_ID:data[0].test
            }]
          }catch(err){
            console.log("에러",err)
          }
             
            }
    }
}
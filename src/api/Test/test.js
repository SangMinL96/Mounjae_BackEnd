const {query} = require('../../../sql/mybatis')
export default {
    Query:{
        hello:async(_,args)=>{
           const {TEST_ID}=args.param;
           const result =await query('test2','test1',{test:TEST_ID});
           console.log(TEST_ID)
           return [{TEST_ID:result[0].name}]
             
            }
    }
}
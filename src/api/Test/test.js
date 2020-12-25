export default {
    Query:{
        hello:async(_,args)=>{
           const {TEST_ID}=args.param;
           console.log( TEST_ID)
           return [{
             TEST_ID:"테스트 성공!"
           }]
        }
    }
}
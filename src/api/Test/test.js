import { generateToken } from "../../passport";

export default {
    Query:{
        hello:async(_,args,{request,query})=>{
           const {TEST_ID}=args.param;
          console.log(request.user,"sdfasd")
        //   const token = generateToken("")
           return [{TEST_ID:"token"}]
             
            }
    }
}
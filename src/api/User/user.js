import { generateToken } from "../../passport";

export default {
    Query:{
        user:async(_,args,{request,query})=>{
           const param=args.param;
           const result =await query('user','login',param);
        
          const token = generateToken(request.id)


           return [{id:"id",token:token}]
             
            }
    }
}
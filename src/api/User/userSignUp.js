import { upgradeBase64crypto } from "../../../utils/pwCrypto";
const crypto = require('crypto')

export default {
    Mutation:{
        signUpUser:async(_,args,{request,query})=>{
            console.log("sdafsad")
            try{
                const param=args.param;
                console.log(param)
                let pwHash =await upgradeBase64crypto(param.pw)
                const result =await query('user','signUser',{...param,pw:pwHash});
                console.log(result)
                if(!result){
                    return {rslt: 'NG', text:"SQL_NG"}
                }else{
                    return {rslt: 'OK', text:"SQL_OK"} 
                }
               
            }catch(err){

            }
            return {rslt: 'NG', text:"SQL_NG"}  
            }
    }
}
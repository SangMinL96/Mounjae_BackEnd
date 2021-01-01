import {AuthenticationError,ApolloError} from "apollo-server"
  

export default {
    Mutation:{
        idCheck:async(_,args,{request,query})=>{
            try{
                const param=args.id;
                console.log(param)
                const result =await query('user','idCheck',{id:param});
                console.log(result)
                if(!result[0]){
                    console.log("중복아님")
                    return {rslt: 'OK', text:"SQL_OK"} 
                }else{
                    console.log("중복")
                    return {rslt: 'NG', text:"SQL_NG"}
                }              
                }catch(err){
                    return {rslt: 'NG', text:"CATCH_ERR"} 
                }
            },
        nameCheck:async(_,args,{request,query})=>{
            try{
                const param=args.name;
                console.log(param)
                const result =await query('user','nameCheck',{name:param});
                console.log(result[0])
                if(!result[0]){
                    console.log("중복아님")
                    return {rslt: 'OK', text:"SQL_OK"} 
                }else{
                    console.log("중복")
                    return {rslt: 'NG', text:"SQL_NG"}
                }              
                }catch(err){
                    return {rslt: 'NG', text:"CATCH_ERR"} 
                }
            }
    }
    
    
}



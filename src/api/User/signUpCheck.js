import {AuthenticationError,ApolloError} from "apollo-server"
  

export default {
    Mutation:{
        idCheck:async(_,args,{request,query})=>{
            try{
                const param=args.id;
                const result =await query('user','idCheck',{id:param});
                if(!result[0]){
                    console.log("중복아님")
                    return {rslt: 'OK', data:""} 
                }else{
                    console.log("중복")
                    return {rslt: 'NG', data:""}
                }              
                }catch(err){
                    return {rslt: 'NG', data:""} 
                }
            },
        nameCheck:async(_,args,{request,query})=>{
            try{
                const param=args.name;
                console.log(param)
                const result =await query('user','nameCheck',{name:param});
                console.log(result[0])
                if(!result[0]){
                    return {rslt: 'OK', data:""} 
                }else{
                    return {rslt: 'NG', data:""}
                }              
                }catch(err){
                    return {rslt: 'NG', data:""} 
                }
            }
    }
    
    
}



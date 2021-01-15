
export default {
    Mutation:{
        saveRoom:async(_,args,{request,query})=>{
            try{

                const param=args.param;
                console.log(param)
                const result =await query('room','saveRoom',{...param,masterid:request.user.id});
            
               console.log(result)
               if(!result){
                   return {rslt: 'NG', text:"SQL_NG"}
               }else{
                   return {rslt: 'OK', text:"SQL_OK"} 
               }
            }catch(err){
// console.log(err)
            }
            }
    },
    Query:{
        getRoomList:async(_,args,{request,query})=>{
            try{
                const result =await query('room','getRoom',{});
            
                console.log(result[0])
                 if(!result[0]){
                return {id:"null",token:""}
            }else{
                return [result[0]]
            }
            }catch(err){
                  // console.log(err)
            }
            }
    }
}
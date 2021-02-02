
export default {
  Mutation: {
    saveRoom: async (_, args, { request, query }) => {
      try {
        const param = args.param;
        const result = await query('room', 'saveRoom', {
          ...param,
          masterid: request.user.id
        });
        if (!result) {
          return { rslt: 'NG', data: "" };
        } else {
          await query('room', 'saveRoomUser', { roomId: result.insertId, userId: request.user.id });
          return { rslt: 'OK', data: param.avatar };
        }
      } catch (err) {
        // console.log(err)
      }
    },
    saveSignRoom: async (_, args, { request, query }) => {
      try {
        const {userId,roomId} = args;
       const result = await query('room', 'saveRoomUser', { roomId, userId });
        if (!result) {
          return { rslt: 'NG', data: "" };
        } else {
          await query('room', 'delSignUser', {  roomId,userId });
          return { rslt: 'OK', data:""};
        }
      } catch (err) {
        // console.log(err)
      }
    },
    getMyRoomList: async (_, args, { request, query }) => {
      try {
   
        const result = await query("room", "getMyRoom", {userId:request.user.id});
       
        if (!result[0]) {
          return null;
        } else {
          return result;
        }
      } catch (err) {
        // console.log(err)
      }
    },
    roomInfoEdit: async (_, args, { request, query }) => {
      try {
        const param = args.param;
        const result = await query("room", "editRoomInfo", {...param});
        if (!result) {
          return { rslt: 'NG', data: "" };
        } else {
           return { rslt: 'OK', data:"" };
        }
      } catch (err) {
        // console.log(err)
      }
    },
    editRoomAvatar: async (_, args, { request, query }) => {
      try {
        const {roomId,avatar} = args;
        const result = await query("room", "editRoomAvatar", {roomId,avatar});

        if (!result) {
          return { rslt: 'NG', data: "" };
        } else {
           return { rslt: 'OK', data:"" };
        }
      } catch (err) {
        // console.log(err)
      }
    },
  },
  Query: {
    getRoomList: async (_, args, { request, query }) => {
      try {
        const {type} =args;
        console.log(type)
        const result = await query("room", "getRoom", {type});
        console.log(result)
        if (!result[0]) {
          return null;
        } else {
          return result;
        }
      } catch (err) {
        // console.log(err)
      }
    },
    roomMasterCheck: async (_, args, { request, query }) => {
      try {
        const roomId = args.roomId;
        const result = await query("room", "roomMasterCheck", {roomId});
        
        if (!result[0]) {
          return { rslt: 'NG', data: "" };
        } else {
          if(result[0].master_id === request.user.id){
            return { rslt: 'OK', data:"" };
          }else{
            return { rslt: 'NG', data: "" };
          }
        }
      } catch (err) {
        // console.log(err)
      }
    },
    getRoomInfo: async (_, args, { request, query }) => {
      try {
        const roomId = args.roomId;
        const result = await query("room", "getRoomInfo", {roomId});
       
        if (!result[0]) {
          return null;
        } else {
          return result;
        }
      } catch (err) {
        // console.log(err)
      }
    },
  
    getRoomAge: async (_, args, { request, query }) => {
      try {
        const id = args.id;
          const ageData = await query('room', 'getRoomAge', {id});
          let avgSum =0
          ageData?.map((item)=>{
            avgSum += item.age
          })

          return { rslt: 'OK', data: String(avgSum / ageData.length) };
      } catch (err) {
        // console.log(err)
      }
    },
    getSignRoom: async (_, args, { request, query }) => {
      try {
        const roomId = args.roomId;
        const result = await query("room", "getSignRoom", {roomId});
        if (!result[0]) {
          return null;
        } else {
           return result;
        }
      } catch (err) {
        // console.log(err)
      }
    }
  }
  
};




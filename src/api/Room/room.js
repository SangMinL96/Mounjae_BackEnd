
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
    getMyRoomList: async (_, args, { request, query }) => {
      try {
        console.log(request.user.id)
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
  },
  Query: {
    getRoomList: async (_, args, { request, query }) => {
      try {
        const result = await query("room", "getRoom", {});
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
    }
  }
  
};




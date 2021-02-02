
export default {
    Mutation: {
      saveRoomVideo: async (_, args, { request, query }) => {
        try {
          const {roomId,video} = args.param;
          const result = await query('room', 'saveRoomVideo', {roomId,video, userId: request.user.id});
          if (!result) {
            return { rslt: 'NG', data: "" };
          } else {
            return { rslt: 'OK', data: "" };
          }
        } catch (err) {
          // console.log(err)
        }
      }
    },
    Query: {
        getPopVideo: async (_, args, { request, query }) => {
          try {
            const roomId = args.roomId;
            const result = await query("room", "getRoomVideo", {roomId, userId: request.user.id});
         
            if (!result[0]) {
              return null;
            } else {
              return result;
            }
          } catch (err) {
            // console.log(err)
          }
        },
        getRecordVideo: async (_, args, { request, query }) => {
          try {
            const roomId = args.roomId;
            const result = await query("room", "getRecordVideo", {roomId, userId: request.user.id});
            if (!result[0]) {
              return null;
            } else {
              return result;
            }
          } catch (err) {
            // console.log(err)
          }
        },
        getMyVideo: async (_, args, { request, query }) => {
          try {
            const result = await query("room", "getMyVideo", {userId: request.user.id});
            if (!result[0]) {
              return null;
            } else {
              return result;
            }
          } catch (err) {
            // console.log(err)
          }
        },
        getPopVideo: async (_, args, { request, query }) => {
          try {
            const result = await query("room", "getPopVideo", {userId: request.user.id});
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
    }
  };
  
  
  
  
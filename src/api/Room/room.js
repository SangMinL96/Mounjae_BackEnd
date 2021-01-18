export default {
  Mutation: {
    saveRoom: async (_, args, { request, query }) => {
      try {
        const param = args.param;
        const result = await query("room", "saveRoom", {
          ...param,
          masterid: request.user.id,
        });
        if (!result) {
          return { rslt: "NG", text: "SQL_NG" };
        } else {
          await query("room", "saveRoomUser", {roomId:result.insertId,userId:request.user.id});
          return { rslt: "OK", text: "SQL_OK" };
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
  },
  
};

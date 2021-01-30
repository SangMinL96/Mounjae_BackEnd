export default {
  Mutation: {
    signRoom: async (_, args, { request, query }) => {
      try {
        const { roomId } = args;
        console.log(args);
        const result = await query('room', 'signRoom', { roomId, userId: request.user.id });
        if (!result) {
          return { rslt: 'NG', data: '' };
        } else {
          return { rslt: 'OK', data: '' };
        }
      } catch (err) {
        // console.log(err)
      }
    },
    signDel: async (_, args, { request, query }) => {
      try {
        const { roomId } = args;
        const result = await query('room', 'signDel', { roomId, userId: request.user.id });
        if (!result) {
          return { rslt: 'NG', data: '' };
        } else {
          return { rslt: 'OK', data: '' };
        }
      } catch (err) {
        // console.log(err)
      }
    },
    
  },
  Query:{
    signRoomCheck: async (_, args, { request, query }) => {
        try {
          const { roomId } = args;
          const result = await query('room', 'signRoomCheck', { roomId, userId: request.user.id });
          console.log(result)
          if (result[0]?.sign_id) {
            return { rslt: '2', data: '' };
          }else{
            const result = await query('room', 'RoomJoinCheck', { roomId, userId: request.user.id });
            if (result[0]?.user_id) {
              return { rslt: '1', data: '' };
            }else{
              return { rslt: '3', data: '' };
            }
          }
        } catch (err) {
          console.log(err);
          return 'test';
        }
      }
  }
};

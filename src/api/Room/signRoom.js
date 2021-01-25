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
    
  },
  Query:{
    signRoomCheck: async (_, args, { request, query }) => {
        try {
          const { roomId } = args;
          const result = await query('room', 'signRoomCheck', { roomId, userId: request.user.id });
          if (result) {
              console.log(result[0])
            if (result[0]?.userid == 1) {
              return { rslt: '1', data: '' };
            } else if (result[0]?.signid == 1) {
              return { rslt: '2', data: '' };
            } else {
              return { rslt: '3', data: '' };
            }
          } else {
            return { rslt: 'NG', data: '' };
          }
        } catch (err) {
          console.log(err);
          return 'test';
        }
      }
  }
};

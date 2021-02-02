export default {
    Mutation: {
        saveLike: async (_, args, { request, query }) => {
        try {
          const { videoId,type } = args;
            console.log(type)
          if(type ==="save"){
              const result = await query('feed', 'saveLike', { videoId, userId: request.user.id});
              console.log(result)
              if (!result) {
                return { rslt: 'NG', data: '' };
              } else {
                return { rslt: 'OK', data: '' };
              }
          }else if(type ==="del"){
            const result = await query('feed', 'delLike', { videoId, userId: request.user.id });
            console.log(result)
            if (!result) {
              return { rslt: 'NG', data: '' };
            } else {
              return { rslt: 'OK', data: '' };
            }
          }else{
            return { rslt: 'NG', data: '' };
          }
        
        } catch (err) {
          // console.log(err)
        }
      },
    },
  };
  
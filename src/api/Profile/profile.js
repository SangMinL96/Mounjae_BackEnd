
export default {
  Query: {
    getProfile: async (_, args, { request, query }) => {
      try {
        const result = await query("profile", "getProfile", {userId:request.user.id});
        console.log(result)
        if (!result) {
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




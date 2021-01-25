export default {
    Mutation: {
        searchRoomList: async (_, args, { request, query }) => {
          try {
              console.log(args)
              const text = args.text
              console.log(`%${text}%`)
            const result = await query("search", "searchRoom", {text:`%${text}%`})
            console.log(result)
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
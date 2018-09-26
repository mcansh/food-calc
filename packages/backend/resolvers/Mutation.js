const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in

    // set 'servingSizeInGrams' default to true
    const { servingSizeInGrams = true } = args;
    const item = await ctx.db.mutation.createItem(
      { data: { ...args, servingSizeInGrams } },
      info
    );

    return item;
  },

  async updateItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.updateItem({ data: { ...args } }, info);

    return item;
  },
};

export default Mutation;

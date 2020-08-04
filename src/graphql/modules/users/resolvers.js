import User from '../../../schemas/User';

export default {
  User: {
    full_name: (user) => `${user.first_name} ${user.last_name}`,
  },
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data }) =>
      User.findOneAndUpdate({ _id: id }, data, { new: true }),
    deleteUser: async (_, { id }) => {
      const deleted = await User.findByIdAndDelete(id);
      return !!deleted;
    },
  },
};

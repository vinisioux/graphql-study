import User from '../../../schemas/User';
import { USER_ADDED } from './channels';

export default {
  User: {
    full_name: (user) => `${user.first_name} ${user.last_name}`,
  },
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: async (_, { data }, { pubsub }) => {
      const user = await User.create(data);

      pubsub.publish(USER_ADDED, {
        userAdded: user,
      });

      return user;
    },
    updateUser: (_, { id, data }) =>
      User.findOneAndUpdate({ _id: id }, data, { new: true }),
    deleteUser: async (_, { id }) => {
      const deleted = await User.findByIdAndDelete(id);
      return !!deleted;
    },
  },
  Subscription: {
    userAdded: {
      subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator(USER_ADDED),
    },
  },
};

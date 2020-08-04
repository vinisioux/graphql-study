import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/graphql', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

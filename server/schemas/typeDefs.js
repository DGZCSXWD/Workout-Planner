const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]!
  }

  type Workout {
    _id: ID
    workoutText: String
    workoutAuthor: String
    createdAt: String
    comments: [Comment]!
    #reactions: Reaction
    upvotes: Int
    downvotes: Int
  }

  #type Reaction {
  #strong: Int
  #fire: Int
  #hot: Int
  #scream: Int
  #poop: Int
  #}

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    workouts(username: String): [Workout]
    workout(workoutId: ID!): Workout
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(workoutText: String!): Workout
    addComment(workoutId: ID!, commentText: String!): Workout
    removeWorkout(workoutId: ID!): Workout
    removeComment(workoutId: ID!, commentId: ID!): Workout
    upvoteWorkout(workoutId: ID!): Workout
    downvoteWorkout(workoutId: ID!): Workout
    #addReaction(workoutId: ID!, reactionType: String!): Workout
  }
`;

module.exports = typeDefs;

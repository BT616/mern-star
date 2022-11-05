const {gql} =require('apollo-server-express')

const typeDefs = gql`
typ query{
   me: User
}
type User{
    _id: ID,
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!

}
 type Book{
_Id: ID!
authors: [String]!,
description: String
bookId: String
title: String
image:String
link: String
}
type Auth{
    token :ID
    user: User
}
input SavedBookInput{
    authors:[String]
    description: String
bookId: String
title: String
image:String
link: String

}
type Mutation{
    login(email: String!, password: String!): Auth
    assUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
}

`;

module.exports =typeDefs;
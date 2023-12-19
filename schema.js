const typeDefs=`#graphql
type People{
id:ID!
name:String!
age:Int!
},
type Area{
id:ID
country:String!
county:String!

}
type Query{
    people:[People]
    person(id:ID!):People
    area:[Area]
}`
export default typeDefs
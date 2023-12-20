const typeDefs=`#graphql
type People{
id:ID!
name:String!
age:Int!
area:Area!
},
type Area{
id:ID!
country:String!
county:String!
}
type Query{
    people:[People]
    person(id:ID!):People
    area:[Area]
    place(id:ID!):Area
}`
export default typeDefs
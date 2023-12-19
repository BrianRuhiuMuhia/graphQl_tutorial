import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema.js';
import db from "./db.js"
//server setup
const resolver={
    Query:{
        person:(_,args)=>{
return db.people.find((person)=>{
    return person.id===args.id
})
        },
        people:()=>
        {
return db.people
        },
        area:()=>
        {
return db.area
        }
    }
}
const server=new ApolloServer({
typeDefs:typeDefs,
resolvers:resolver
})
const {url}=await startStandaloneServer(server,{
    listen:{port:5000}
})

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
        },
        place:(_,args)=>{
            return db.area.find((place)=>{
                return place.id===args.id
            })
        }
    },
    People:{
        area:(parent)=>{
return db.area.find((a)=>{
return a.id===parent.id
})
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

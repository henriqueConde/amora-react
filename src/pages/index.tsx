import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import Main from 'components/Main'

export default function Home() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  client.query({
    query: gql`
      query GET_BRANDS {
        brands {
          data {
            attributes {
              name
            }
          }
        }
      }
    `
  })

  return <Main />
}

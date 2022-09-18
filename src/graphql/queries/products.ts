import { gql } from '@apollo/client'

export const QUERY_PRODUCTS = gql`
  query GET_PERFUMES {
    products {
      data {
        attributes {
          name
          slug
          price
          cover {
            data {
              attributes {
                url
              }
            }
          }
          brand {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

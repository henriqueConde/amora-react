import { gql } from '@apollo/client'

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    name
    slug
    price
    brand {
      data {
        attributes {
          name
        }
      }
    }
    cover {
      data {
        attributes {
          url
        }
      }
    }
  }
`

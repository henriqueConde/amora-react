import { gql } from '@apollo/client'
import { ProductFragment } from 'graphql/fragments/product'

export const QUERY_PRODUCTS = gql`
  query GET_PRODUCTS($limit: PaginationArg) {
    products(pagination: $limit) {
      data {
        attributes {
          ...ProductFragment
        }
      }
    }
  }

  ${ProductFragment}
`

export const QUERY_PRODUCT_BY_SLUG = gql`
  query QueryProductsBySlug($slug: String) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_descritpion
          description
          price
          rating
          release_date
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          gallery {
            data {
              attributes {
                label: alternativeText
                src: url
              }
            }
          }
        }
      }
    }
  }
`

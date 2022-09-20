import { gql } from '@apollo/client'
import { ProductFragment } from 'graphql/fragments/product'

export const QUERY_PRODUCTS = gql`
  query GET_PRODUCTS(
    $limit: Int!
    $start: Int
    $where: ProductFiltersInput
    $sort: [String]
  ) {
    products(
      pagination: { limit: $limit, start: $start }
      filters: $where
      sort: $sort
    ) {
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

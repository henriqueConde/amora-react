import { gql } from '@apollo/client'

export const QUERY_PRODUCTS = gql`
  query GET_PRODUCTS($limit: PaginationArg) {
    products(pagination: $limit) {
      data {
        attributes {
          name
          slug
          short_descritpion
          price
          release_date
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

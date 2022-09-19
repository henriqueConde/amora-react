import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          ribbon {
            text
            color
            size
          }
          title
          subtitle
          button {
            label
            link
          }
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`

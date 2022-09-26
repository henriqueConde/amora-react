import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
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
`

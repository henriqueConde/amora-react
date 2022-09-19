import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
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
`

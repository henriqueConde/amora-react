import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment Highlight on ComponentPageHighlight {
    title
    subtitle
    background {
      data {
        attributes {
          url
        }
      }
    }
    floatImage {
      data {
        attributes {
          url
        }
      }
    }
    buttonLabel
    buttonLink
    alignment
  }
`

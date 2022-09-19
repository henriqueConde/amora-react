import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { HighlightFragment } from 'graphql/fragments/highlight'
import { ProductFragment } from 'graphql/fragments/product'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
    newProducts: products(
      filters: {
        release_date: { lte: "2022-09-10" }
        and: { release_date: { gte: "2022-09-06" } }
      }
      sort: "release_date:desc"
    ) {
      data {
        attributes {
          ...ProductFragment
        }
      }
    }
    upcomingProducts: products(
      filters: { release_date: { gte: "2022-09-10" } }
      sort: "release_date:desc"
    ) {
      data {
        attributes {
          ...ProductFragment
        }
      }
    }
    promotionalProducts: products(
      filters: { promotionalPrice: { notNull: true } }
    ) {
      data {
        attributes {
          ...ProductFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          newProducts {
            title
            highlight {
              ...Highlight
            }
          }
          popularProducts {
            title
            highlight {
              ...Highlight
            }
            products(pagination: { limit: 8 }) {
              data {
                attributes {
                  ...ProductFragment
                }
              }
            }
          }
          upcomingProducts {
            title
            highlight {
              ...Highlight
            }
          }
          promotionalProducts {
            title
            highlight {
              ...Highlight
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${HighlightFragment}
  ${ProductFragment}
`

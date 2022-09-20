import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import { mapBanners, mapHighlight, mapHomeProducts } from 'utils/queriesMappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: {
      banners,
      sections,
      newProducts,
      promotionalProducts,
      upcomingProducts
    }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  const popularProducts = sections.data.attributes.popularProducts.products
  const popularHighlight = sections.data.attributes.popularProducts.highlight
  const upcomingHighlight = sections.data.attributes.upcomingProducts.highlight
  const promotionalHighlight =
    sections.data.attributes.promotionalProducts.highlight

  return {
    props: {
      revalidate: 60,
      banners: mapBanners(banners),
      newProducts: mapHomeProducts(newProducts),
      mostPopularHighlight: mapHighlight(popularHighlight),
      mostPopularProducts: mapHomeProducts(popularProducts),
      upcomingProducts: mapHomeProducts(upcomingProducts),
      upcomingHighlight: mapHighlight(upcomingHighlight),
      upcomingMorePerfumes: mapHomeProducts(upcomingProducts),
      promotionalPerfumes: mapHomeProducts(promotionalProducts),
      promotionalHighlight: mapHighlight(promotionalHighlight)
    }
  }
}

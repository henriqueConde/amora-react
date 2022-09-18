import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/tests/apollo'
import { QUERY_PRODUCTS } from 'graphql/queries/products'

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: QUERY_PRODUCTS })

  return {
    props: {
      data,
      initializeApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newPerfumes: perfumesMock,
      mostPopularHighlight: highlightMock,
      mostPopularProducts: perfumesMock,
      upcomingProducts: perfumesMock,
      upcomingHighligth: highlightMock,
      upcomingMorePerfumes: perfumesMock,
      promotionalPerfumes: perfumesMock,
      promotionalHighligth: highlightMock
    }
  }
}

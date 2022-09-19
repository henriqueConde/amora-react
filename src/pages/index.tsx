import Home, { HomeTemplateProps } from 'templates/Home'
import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/tests/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  const banners = data.banners?.data.map((banner) => {
    const { image, button, ribbon, subtitle, title } = banner.attributes
    return {
      img: `http://localhost:1337${image.data.attributes.url}`,
      title,
      subtitle,
      buttonLabel: button.label,
      buttonLink: button.link,
      ribbon: ribbon?.text || null,
      ribbonColor: ribbon?.color || null,
      ribbonSize: ribbon?.size || null
    }
  })

  return {
    props: {
      revalidate: 60,
      banners: banners,
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

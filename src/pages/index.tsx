import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
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

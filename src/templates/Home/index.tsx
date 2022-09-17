import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newPerfumes: ProductCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularPerfumes: ProductCardProps[]
  upcomingPerfumes: ProductCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMorePerfumes: ProductCardProps[]
  promotionalPerfumes: ProductCardProps[]
  promotionalHighlight: HighlightProps
}

const Home = ({
  banners,
  newPerfumes,
  mostPopularHighlight,
  mostPopularPerfumes,
  upcomingPerfumes,
  upcomingHighlight,
  upcomingMorePerfumes,
  promotionalPerfumes,
  promotionalHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" perfumes={newPerfumes} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      perfumes={mostPopularPerfumes}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" perfumes={upcomingPerfumes} />
      <Showcase highlight={upcomingHighlight} perfumes={upcomingMorePerfumes} />
    </S.SectionUpcoming>

    <Showcase
      title="Free perfumes"
      highlight={promotionalHighlight}
      perfumes={promotionalPerfumes}
    />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home

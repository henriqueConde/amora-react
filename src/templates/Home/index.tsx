import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'
import Base from 'templates/Base'

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
  <Base>
    <Container>
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
  </Base>
)

export default Home

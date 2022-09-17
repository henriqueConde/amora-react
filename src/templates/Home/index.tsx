import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import ProductCardSlider from 'components/ProductCardSlider'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newPerfumes: ProductCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularPerfumes: ProductCardProps[]
  upcomingPerfumes: ProductCardProps[]
  upcomingHighligth: HighlightProps
  upcomingMorePerfumes: ProductCardProps[]
  promotionalPerfumes: ProductCardProps[]
  promotionalHighligth: HighlightProps
}

const Home = ({
  banners,
  newPerfumes,
  mostPopularHighlight,
  mostPopularPerfumes,
  upcomingPerfumes,
  upcomingHighligth,
  upcomingMorePerfumes,
  promotionalPerfumes,
  promotionalHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <ProductCardSlider items={newPerfumes} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <ProductCardSlider items={mostPopularPerfumes} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>
        <ProductCardSlider items={upcomingPerfumes} />
        <Highlight {...upcomingHighligth} />
        <ProductCardSlider items={upcomingMorePerfumes} />
      </S.SectionUpcoming>

      <S.SectionPromotionalPerfumes>
        <Heading lineLeft lineColor="secondary">
          Promotional Perfumes
        </Heading>

        <Highlight {...promotionalHighligth} />
        <ProductCardSlider items={promotionalPerfumes} />
      </S.SectionPromotionalPerfumes>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
export default Home

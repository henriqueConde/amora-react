import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlight'

import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  banners: BannerProps[]
  newProducts: ProductCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularProducts: ProductCardProps[]
  upcomingProducts: ProductCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMorePerfumes: ProductCardProps[]
  promotionalPerfumes: ProductCardProps[]
  promotionalHighlight: HighlightProps
}

const Home = ({
  banners,
  newProducts,
  mostPopularHighlight,
  mostPopularProducts,
  upcomingProducts,
  upcomingHighlight,
  promotionalPerfumes,
  promotionalHighlight
}: HomeTemplateProps) => (
  <Base>
    <S.SectionBanner>
      <BannerSlider items={banners} />
    </S.SectionBanner>

    <S.SectionNews>
      <Showcase title="New Products" products={newProducts} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      products={mostPopularProducts}
    />

    <S.SectionUpcoming>
      <Showcase
        title="Upcoming"
        products={upcomingProducts}
        highlight={upcomingHighlight}
      />
    </S.SectionUpcoming>

    <Showcase
      title="Promotional products"
      highlight={promotionalHighlight}
      products={promotionalPerfumes}
    />
  </Base>
)

export default Home

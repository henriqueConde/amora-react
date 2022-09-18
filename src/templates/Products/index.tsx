import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ProductCard, { ProductCardProps } from 'components/ProductCard'
import { Grid } from 'components/Grid'

import * as S from './styles'

export type ProductsTemplateProps = {
  products?: ProductCardProps[]
  filterItems: ItemProps[]
}

const ProductsTemplate = ({
  filterItems,
  products = []
}: ProductsTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {products.map((item) => (
              <ProductCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default ProductsTemplate

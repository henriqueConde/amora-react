import ProductsTemplate, { ProductsTemplateProps } from 'templates/Products'
import filterItemsMock from 'components/ExploreSidebar/mock'
import perfumesMock from 'components/ProductCardSlider/mock'

export default function ProductsPage(props: ProductsTemplateProps) {
  return <ProductsTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      products: perfumesMock,
      filterItems: filterItemsMock
    }
  }
}

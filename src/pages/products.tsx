import ProductsTemplate, { ProductsTemplateProps } from 'templates/Products'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/tests/apollo'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import {
  GET_PRODUCTS,
  GET_PRODUCTSVariables
} from 'graphql/generated/GET_PRODUCTS'

export default function ProductsPage(props: ProductsTemplateProps) {
  return <ProductsTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    GET_PRODUCTS,
    GET_PRODUCTSVariables
  >({
    query: QUERY_PRODUCTS,
    variables: {
      limit: {
        limit: 9
      }
    }
  })
  console.log(data)

  const products = data.products.data.map((product) => {
    const { name, price, cover, brand, slug } = product.attributes
    const brandProxy = brand.data?.attributes?.name
      ? brand.data.attributes.name
      : ''
    return {
      title: name,
      slug,
      price: price,
      img: `http://localhost:1337${cover.data?.attributes?.url}`,
      brand: brandProxy
    }
  })
  return {
    props: {
      revalidate: 60,
      products: products,
      filterItems: filterItemsMock
    }
  }
}

import ProductsTemplate, { ProductsTemplateProps } from 'templates/Products'
import { initializeApollo } from 'utils/apollo'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import {
  GET_PRODUCTS,
  GET_PRODUCTSVariables
} from 'graphql/generated/GET_PRODUCTS'
import {
  brandFields,
  categoriesFields,
  priceFields,
  sortFields
} from 'utils/filters/fields'

export default function ProductsPage(props: ProductsTemplateProps) {
  return <ProductsTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Price',
    name: 'price',
    type: 'radio',
    fields: priceFields
  }

  const filterBrands = {
    title: 'Brand',
    name: 'brand',
    type: 'checkbox',
    fields: brandFields
  }

  const filterSort = {
    title: 'Sort',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterCategories = {
    title: 'Categories',
    name: 'categories',
    type: 'checkbox',
    fields: categoriesFields
  }

  const filterItems = [filterSort, filterPrice, filterBrands, filterCategories]

  await apolloClient.query<GET_PRODUCTS, GET_PRODUCTSVariables>({
    query: QUERY_PRODUCTS,
    variables: {
      limit: 2
    }
  })
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}

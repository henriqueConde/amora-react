import ProductsTemplate, { ProductsTemplateProps } from 'templates/Products'
import { initializeApollo } from 'utils/apollo'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import {
  GET_PRODUCTS,
  GET_PRODUCTSVariables
} from 'graphql/generated/GET_PRODUCTS'
import { parseQueryStringToWhere } from 'utils/filters'
import { GetServerSidePropsContext } from 'next'

export default function ProductsPage(props: ProductsTemplateProps) {
  return <ProductsTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Price',
    name: 'price',
    type: 'radio',
    fields: [
      { label: 'Under $50', name: 50 },
      { label: 'Under $100', name: 100 },
      { label: 'Under $150', name: 150 },
      { label: 'Under $250', name: 250 },
      { label: 'Under $500', name: 500 }
    ]
  }

  const filterBrands = {
    title: 'Brand',
    name: 'brand',
    type: 'checkbox',
    fields: [
      { label: 'Lumiere Eau', name: 'lumiere eau' },
      { label: 'Gold Glamour', name: 'gold glamour' },
      { label: 'Elysee Parfum', name: 'elysee parfum' },
      { label: 'Nuit Gaspard', name: 'nuit gaspard' }
    ]
  }

  const filterSort = {
    title: 'Sort',
    name: 'sort',
    type: 'radio',
    fields: [
      { label: 'Lowest to highest', name: 'price:asc' },
      { label: 'Highest to lowest', name: 'price:desc' }
    ]
  }

  const filterCategories = {
    title: 'Categories',
    name: 'categories',
    type: 'checkbox',
    fields: [
      { label: 'Aromatic', name: 'aromatic' },
      { label: 'Citric', name: 'citric' },
      { label: 'Oriental', name: 'oriental' }
    ]
  }

  const filterItems = [filterSort, filterPrice, filterBrands, filterCategories]

  await apolloClient.query<GET_PRODUCTS, GET_PRODUCTSVariables>({
    query: QUERY_PRODUCTS,
    variables: {
      limit: 2,
      where:
        parseQueryStringToWhere({
          queryString: query,
          filterItems: filterItems
        }) || null
      // sort: [query?.sort as string] || null
    }
  })
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}

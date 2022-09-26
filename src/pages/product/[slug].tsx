import { useRouter } from 'next/router'
import Product, { ProductTemplateProps } from 'templates/Product'

import perfumesMock from 'components/ProductCardSlider/mock'
import { initializeApollo } from 'utils/apollo'
import {
  GET_PRODUCTS,
  GET_PRODUCTSVariables
} from 'graphql/generated/GET_PRODUCTS'
import { QUERY_PRODUCTS, QUERY_PRODUCT_BY_SLUG } from 'graphql/queries/products'
import {
  QueryProductsBySlug,
  QueryProductsBySlugVariables
} from 'graphql/generated/QueryProductsBySlug'
import { GetStaticProps } from 'next/types'
import { GetStaticPropsContext } from 'next'

const apolloClient = initializeApollo()

export default function Index(props: ProductTemplateProps) {
  const router = useRouter()

  // if the page is still not generate, apply relevant logic here, for example, show a loading animation,etc
  if (router.isFallback) return null
  return <Product {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    GET_PRODUCTS,
    GET_PRODUCTSVariables
  >({
    query: QUERY_PRODUCTS,
    variables: {
      limit: 9
    }
  })

  const productInfoArr = data?.products?.data

  const paths = productInfoArr?.map((product) => {
    const { slug } = product.attributes
    return {
      params: { slug }
    }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const { data } = await apolloClient.query<
    QueryProductsBySlug,
    QueryProductsBySlugVariables
  >({
    query: QUERY_PRODUCT_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  })

  if (!data.products.data.length) {
    return { notFound: true }
  }

  const product = data.products.data[0].attributes

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${product.cover.data.attributes.src}`,
      productInfo: {
        title: product.name,
        price: product.price,
        description: product.short_descritpion
      },
      description: product.description,
      recommendedProducts: perfumesMock
    }
  }
}

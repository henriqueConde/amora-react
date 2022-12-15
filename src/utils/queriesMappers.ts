import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'
import { ProductCardProps } from 'components/ProductCard'
import {
  GET_PRODUCTS,
  GET_PRODUCTS_products_data
} from 'graphql/generated/GET_PRODUCTS'
import {
  QueryHome_banners,
  QueryHome_newProducts,
  QueryHome_promotionalProducts,
  QueryHome_sections_data_attributes_popularProducts_highlight,
  QueryHome_sections_data_attributes_popularProducts_products,
  QueryHome_sections_data_attributes_promotionalProducts_highlight,
  QueryHome_sections_data_attributes_upcomingProducts_highlight,
  QueryHome_upcomingProducts
} from 'graphql/generated/QueryHome'

const BRASE_URL = 'http://localhost:1337'

export const mapBanners = (banners: QueryHome_banners): BannerProps[] => {
  return banners?.data.map((banner) => {
    const { image, button, subtitle, title } = banner.attributes
    return {
      img: `${BRASE_URL}${image.data.attributes.url}`,
      title,
      subtitle,
      buttonLabel: button.label,
      buttonLink: button.link
    }
  })
}

type homeProducts =
  | QueryHome_newProducts
  | QueryHome_upcomingProducts
  | QueryHome_promotionalProducts
  | QueryHome_sections_data_attributes_popularProducts_products

export const mapHomeProducts = (products: homeProducts): ProductCardProps[] => {
  const productsArr = products.data
  return productsArr.map((product) => {
    const { name, brand, cover, price, slug } = product.attributes
    return {
      title: name,
      brand: brand.data?.attributes.name || null,
      img: `${BRASE_URL}${cover.data.attributes.url}`,
      price,
      slug,
      promotionalPrice: name === 'Coffee' ? 15 : null
    }
  })
}

type products = GET_PRODUCTS

export const mapProducts = (products: products): ProductCardProps[] => {
  const productsArr = products?.products?.data as GET_PRODUCTS_products_data[]
  return productsArr.map((product) => {
    const { name, brand, cover, price, slug } = product.attributes
    return {
      title: name,
      brand: brand.data?.attributes.name || null,
      img: `${BRASE_URL}${cover.data.attributes.url}`,
      price,
      slug
    }
  })
}

type highlight =
  | QueryHome_sections_data_attributes_popularProducts_highlight
  | QueryHome_sections_data_attributes_upcomingProducts_highlight
  | QueryHome_sections_data_attributes_promotionalProducts_highlight

export const mapHighlight = (highlight: highlight): HighlightProps => {
  return {
    title: highlight.title,
    subtitle: highlight.subtitle,
    backgroundImage: `${BRASE_URL}${highlight.background.data.attributes.url}`,
    floatImage: `${BRASE_URL}${highlight.floatImage.data.attributes.url}`,
    buttonLabel: highlight.buttonLabel,
    buttonLink: highlight.buttonLink,
    alignment: highlight.alignment || 'right'
  }
}

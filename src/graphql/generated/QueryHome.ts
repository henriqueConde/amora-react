/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_data_attributes_ribbon {
  __typename: "ComponentPageRibbon";
  text: string;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_banners_data_attributes_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  alternativeText: string | null;
  url: string;
}

export interface QueryHome_banners_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_banners_data_attributes_image_data_attributes | null;
}

export interface QueryHome_banners_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_banners_data_attributes_image_data | null;
}

export interface QueryHome_banners_data_attributes {
  __typename: "Banner";
  ribbon: QueryHome_banners_data_attributes_ribbon | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_data_attributes_button;
  image: QueryHome_banners_data_attributes_image;
}

export interface QueryHome_banners_data {
  __typename: "BannerEntity";
  attributes: QueryHome_banners_data_attributes | null;
}

export interface QueryHome_banners {
  __typename: "BannerEntityResponseCollection";
  data: QueryHome_banners_data[];
}

export interface QueryHome_newProducts_data_attributes_brand_data_attributes {
  __typename: "Brand";
  name: string;
}

export interface QueryHome_newProducts_data_attributes_brand_data {
  __typename: "BrandEntity";
  attributes: QueryHome_newProducts_data_attributes_brand_data_attributes | null;
}

export interface QueryHome_newProducts_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_newProducts_data_attributes_brand_data | null;
}

export interface QueryHome_newProducts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newProducts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_newProducts_data_attributes_cover_data_attributes | null;
}

export interface QueryHome_newProducts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_newProducts_data_attributes_cover_data | null;
}

export interface QueryHome_newProducts_data_attributes {
  __typename: "Product";
  name: string;
  slug: string | null;
  price: number;
  brand: QueryHome_newProducts_data_attributes_brand | null;
  cover: QueryHome_newProducts_data_attributes_cover | null;
}

export interface QueryHome_newProducts_data {
  __typename: "ProductEntity";
  attributes: QueryHome_newProducts_data_attributes | null;
}

export interface QueryHome_newProducts {
  __typename: "ProductEntityResponseCollection";
  data: QueryHome_newProducts_data[];
}

export interface QueryHome_upcomingProducts_data_attributes_brand_data_attributes {
  __typename: "Brand";
  name: string;
}

export interface QueryHome_upcomingProducts_data_attributes_brand_data {
  __typename: "BrandEntity";
  attributes: QueryHome_upcomingProducts_data_attributes_brand_data_attributes | null;
}

export interface QueryHome_upcomingProducts_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_upcomingProducts_data_attributes_brand_data | null;
}

export interface QueryHome_upcomingProducts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upcomingProducts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_upcomingProducts_data_attributes_cover_data_attributes | null;
}

export interface QueryHome_upcomingProducts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_upcomingProducts_data_attributes_cover_data | null;
}

export interface QueryHome_upcomingProducts_data_attributes {
  __typename: "Product";
  name: string;
  slug: string | null;
  price: number;
  brand: QueryHome_upcomingProducts_data_attributes_brand | null;
  cover: QueryHome_upcomingProducts_data_attributes_cover | null;
}

export interface QueryHome_upcomingProducts_data {
  __typename: "ProductEntity";
  attributes: QueryHome_upcomingProducts_data_attributes | null;
}

export interface QueryHome_upcomingProducts {
  __typename: "ProductEntityResponseCollection";
  data: QueryHome_upcomingProducts_data[];
}

export interface QueryHome_promotionalProducts_data_attributes_brand_data_attributes {
  __typename: "Brand";
  name: string;
}

export interface QueryHome_promotionalProducts_data_attributes_brand_data {
  __typename: "BrandEntity";
  attributes: QueryHome_promotionalProducts_data_attributes_brand_data_attributes | null;
}

export interface QueryHome_promotionalProducts_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_promotionalProducts_data_attributes_brand_data | null;
}

export interface QueryHome_promotionalProducts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_promotionalProducts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_promotionalProducts_data_attributes_cover_data_attributes | null;
}

export interface QueryHome_promotionalProducts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_promotionalProducts_data_attributes_cover_data | null;
}

export interface QueryHome_promotionalProducts_data_attributes {
  __typename: "Product";
  name: string;
  slug: string | null;
  price: number;
  brand: QueryHome_promotionalProducts_data_attributes_brand | null;
  cover: QueryHome_promotionalProducts_data_attributes_cover | null;
}

export interface QueryHome_promotionalProducts_data {
  __typename: "ProductEntity";
  attributes: QueryHome_promotionalProducts_data_attributes | null;
}

export interface QueryHome_promotionalProducts {
  __typename: "ProductEntityResponseCollection";
  data: QueryHome_promotionalProducts_data[];
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_newProducts_highlight_background_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_newProducts_highlight_background_data | null;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data | null;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_newProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_newProducts_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_data_attributes_newProducts {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_data_attributes_newProducts_highlight | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_highlight_background_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_highlight_background_data | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_popularProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_popularProducts_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data_attributes {
  __typename: "Brand";
  name: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data {
  __typename: "BrandEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes {
  __typename: "Product";
  name: string;
  slug: string | null;
  price: number;
  brand: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand | null;
  cover: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data {
  __typename: "ProductEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_products_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_popularProducts_products {
  __typename: "ProductRelationResponseCollection";
  data: QueryHome_sections_data_attributes_popularProducts_products_data[];
}

export interface QueryHome_sections_data_attributes_popularProducts {
  __typename: "ComponentPagePopularProducts";
  title: string;
  highlight: QueryHome_sections_data_attributes_popularProducts_highlight | null;
  products: QueryHome_sections_data_attributes_popularProducts_products | null;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data | null;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data | null;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_upcomingProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_data_attributes_upcomingProducts {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_data_attributes_upcomingProducts_highlight | null;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data | null;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data_attributes | null;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data | null;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_promotionalProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_data_attributes_promotionalProducts {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_data_attributes_promotionalProducts_highlight | null;
}

export interface QueryHome_sections_data_attributes {
  __typename: "Home";
  newProducts: QueryHome_sections_data_attributes_newProducts;
  popularProducts: QueryHome_sections_data_attributes_popularProducts | null;
  upcomingProducts: QueryHome_sections_data_attributes_upcomingProducts | null;
  promotionalProducts: QueryHome_sections_data_attributes_promotionalProducts | null;
}

export interface QueryHome_sections_data {
  __typename: "HomeEntity";
  attributes: QueryHome_sections_data_attributes | null;
}

export interface QueryHome_sections {
  __typename: "HomeEntityResponse";
  data: QueryHome_sections_data | null;
}

export interface QueryHome {
  banners: QueryHome_banners | null;
  newProducts: QueryHome_newProducts | null;
  upcomingProducts: QueryHome_upcomingProducts | null;
  promotionalProducts: QueryHome_promotionalProducts | null;
  sections: QueryHome_sections | null;
}

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
  color: ENUM_COMPONENTPAGERIBBON_COLOR;
  size: ENUM_COMPONENTPAGERIBBON_SIZE;
}

export interface QueryHome_banners_data_attributes_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  alternativeText: string;
  url: string;
}

export interface QueryHome_banners_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_banners_data_attributes_image_data_attributes;
}

export interface QueryHome_banners_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_banners_data_attributes_image_data;
}

export interface QueryHome_banners_data_attributes {
  __typename: "Banner";
  ribbon: QueryHome_banners_data_attributes_ribbon;
  title: string;
  subtitle: string;
  button: QueryHome_banners_data_attributes_button;
  image: QueryHome_banners_data_attributes_image;
}

export interface QueryHome_banners_data {
  __typename: "BannerEntity";
  attributes: QueryHome_banners_data_attributes;
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
  attributes: QueryHome_newProducts_data_attributes_brand_data_attributes;
}

export interface QueryHome_newProducts_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_newProducts_data_attributes_brand_data;
}

export interface QueryHome_newProducts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newProducts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_newProducts_data_attributes_cover_data_attributes;
}

export interface QueryHome_newProducts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_newProducts_data_attributes_cover_data;
}

export interface QueryHome_newProducts_data_attributes {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  brand: QueryHome_newProducts_data_attributes_brand;
  cover: QueryHome_newProducts_data_attributes_cover;
}

export interface QueryHome_newProducts_data {
  __typename: "ProductEntity";
  attributes: QueryHome_newProducts_data_attributes;
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
  attributes: QueryHome_upcomingProducts_data_attributes_brand_data_attributes;
}

export interface QueryHome_upcomingProducts_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_upcomingProducts_data_attributes_brand_data;
}

export interface QueryHome_upcomingProducts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upcomingProducts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_upcomingProducts_data_attributes_cover_data_attributes;
}

export interface QueryHome_upcomingProducts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_upcomingProducts_data_attributes_cover_data;
}

export interface QueryHome_upcomingProducts_data_attributes {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  brand: QueryHome_upcomingProducts_data_attributes_brand;
  cover: QueryHome_upcomingProducts_data_attributes_cover;
}

export interface QueryHome_upcomingProducts_data {
  __typename: "ProductEntity";
  attributes: QueryHome_upcomingProducts_data_attributes;
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
  attributes: QueryHome_promotionalProducts_data_attributes_brand_data_attributes;
}

export interface QueryHome_promotionalProducts_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_promotionalProducts_data_attributes_brand_data;
}

export interface QueryHome_promotionalProducts_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_promotionalProducts_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_promotionalProducts_data_attributes_cover_data_attributes;
}

export interface QueryHome_promotionalProducts_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_promotionalProducts_data_attributes_cover_data;
}

export interface QueryHome_promotionalProducts_data_attributes {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  brand: QueryHome_promotionalProducts_data_attributes_brand;
  cover: QueryHome_promotionalProducts_data_attributes_cover;
}

export interface QueryHome_promotionalProducts_data {
  __typename: "ProductEntity";
  attributes: QueryHome_promotionalProducts_data_attributes;
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
  attributes: QueryHome_sections_data_attributes_newProducts_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_newProducts_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_newProducts_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_newProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_newProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_newProducts_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_newProducts {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_data_attributes_newProducts_highlight;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_popularProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_popularProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_popularProducts_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data_attributes {
  __typename: "Brand";
  name: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data {
  __typename: "BrandEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand_data;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover_data;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data_attributes {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  brand: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_brand;
  cover: QueryHome_sections_data_attributes_popularProducts_products_data_attributes_cover;
}

export interface QueryHome_sections_data_attributes_popularProducts_products_data {
  __typename: "ProductEntity";
  attributes: QueryHome_sections_data_attributes_popularProducts_products_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularProducts_products {
  __typename: "ProductRelationResponseCollection";
  data: QueryHome_sections_data_attributes_popularProducts_products_data[];
}

export interface QueryHome_sections_data_attributes_popularProducts {
  __typename: "ComponentPagePopularProducts";
  title: string;
  highlight: QueryHome_sections_data_attributes_popularProducts_highlight;
  products: QueryHome_sections_data_attributes_popularProducts_products;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_upcomingProducts_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_upcomingProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_upcomingProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_upcomingProducts_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_upcomingProducts {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_data_attributes_upcomingProducts_highlight;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_promotionalProducts_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_promotionalProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_promotionalProducts_highlight_background;
  floatImage: QueryHome_sections_data_attributes_promotionalProducts_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_promotionalProducts {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_data_attributes_promotionalProducts_highlight;
}

export interface QueryHome_sections_data_attributes {
  __typename: "Home";
  newProducts: QueryHome_sections_data_attributes_newProducts;
  popularProducts: QueryHome_sections_data_attributes_popularProducts;
  upcomingProducts: QueryHome_sections_data_attributes_upcomingProducts;
  promotionalProducts: QueryHome_sections_data_attributes_promotionalProducts;
}

export interface QueryHome_sections_data {
  __typename: "HomeEntity";
  attributes: QueryHome_sections_data_attributes;
}

export interface QueryHome_sections {
  __typename: "HomeEntityResponse";
  data: QueryHome_sections_data;
}

export interface QueryHome {
  banners: QueryHome_banners;
  newProducts: QueryHome_newProducts;
  upcomingProducts: QueryHome_upcomingProducts;
  promotionalProducts: QueryHome_promotionalProducts;
  sections: QueryHome_sections;
}

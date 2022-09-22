/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PRODUCT_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryProductsBySlug
// ====================================================

export interface QueryProductsBySlug_products_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  src: string;
}

export interface QueryProductsBySlug_products_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryProductsBySlug_products_data_attributes_cover_data_attributes;
}

export interface QueryProductsBySlug_products_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryProductsBySlug_products_data_attributes_cover_data;
}

export interface QueryProductsBySlug_products_data_attributes_gallery_data_attributes {
  __typename: "UploadFile";
  label: string;
  src: string;
}

export interface QueryProductsBySlug_products_data_attributes_gallery_data {
  __typename: "UploadFileEntity";
  attributes: QueryProductsBySlug_products_data_attributes_gallery_data_attributes;
}

export interface QueryProductsBySlug_products_data_attributes_gallery {
  __typename: "UploadFileRelationResponseCollection";
  data: QueryProductsBySlug_products_data_attributes_gallery_data[];
}

export interface QueryProductsBySlug_products_data_attributes {
  __typename: "Product";
  name: string;
  short_descritpion: string;
  description: string;
  price: number;
  rating: ENUM_PRODUCT_RATING;
  release_date: any;
  cover: QueryProductsBySlug_products_data_attributes_cover;
  gallery: QueryProductsBySlug_products_data_attributes_gallery;
}

export interface QueryProductsBySlug_products_data {
  __typename: "ProductEntity";
  attributes: QueryProductsBySlug_products_data_attributes;
}

export interface QueryProductsBySlug_products {
  __typename: "ProductEntityResponseCollection";
  data: QueryProductsBySlug_products_data[];
}

export interface QueryProductsBySlug {
  products: QueryProductsBySlug_products;
}

export interface QueryProductsBySlugVariables {
  slug?: string;
}

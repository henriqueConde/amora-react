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
  attributes: QueryProductsBySlug_products_data_attributes_cover_data_attributes | null;
}

export interface QueryProductsBySlug_products_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryProductsBySlug_products_data_attributes_cover_data | null;
}

export interface QueryProductsBySlug_products_data_attributes_gallery_data_attributes {
  __typename: "UploadFile";
  label: string | null;
  src: string;
}

export interface QueryProductsBySlug_products_data_attributes_gallery_data {
  __typename: "UploadFileEntity";
  attributes: QueryProductsBySlug_products_data_attributes_gallery_data_attributes | null;
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
  rating: ENUM_PRODUCT_RATING | null;
  release_date: any | null;
  cover: QueryProductsBySlug_products_data_attributes_cover | null;
  gallery: QueryProductsBySlug_products_data_attributes_gallery | null;
}

export interface QueryProductsBySlug_products_data {
  __typename: "ProductEntity";
  attributes: QueryProductsBySlug_products_data_attributes | null;
}

export interface QueryProductsBySlug_products {
  __typename: "ProductEntityResponseCollection";
  data: QueryProductsBySlug_products_data[];
}

export interface QueryProductsBySlug {
  products: QueryProductsBySlug_products | null;
}

export interface QueryProductsBySlugVariables {
  slug?: string | null;
}

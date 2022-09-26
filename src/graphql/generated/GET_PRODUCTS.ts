/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductFiltersInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GET_PRODUCTS
// ====================================================

export interface GET_PRODUCTS_products_data_attributes_brand_data_attributes {
  __typename: "Brand";
  name: string;
}

export interface GET_PRODUCTS_products_data_attributes_brand_data {
  __typename: "BrandEntity";
  attributes: GET_PRODUCTS_products_data_attributes_brand_data_attributes;
}

export interface GET_PRODUCTS_products_data_attributes_brand {
  __typename: "BrandEntityResponse";
  data: GET_PRODUCTS_products_data_attributes_brand_data;
}

export interface GET_PRODUCTS_products_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GET_PRODUCTS_products_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: GET_PRODUCTS_products_data_attributes_cover_data_attributes;
}

export interface GET_PRODUCTS_products_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: GET_PRODUCTS_products_data_attributes_cover_data;
}

export interface GET_PRODUCTS_products_data_attributes {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  brand: GET_PRODUCTS_products_data_attributes_brand;
  cover: GET_PRODUCTS_products_data_attributes_cover;
}

export interface GET_PRODUCTS_products_data {
  __typename: "ProductEntity";
  attributes: GET_PRODUCTS_products_data_attributes;
}

export interface GET_PRODUCTS_products {
  __typename: "ProductEntityResponseCollection";
  data: GET_PRODUCTS_products_data[];
}

export interface GET_PRODUCTS {
  products: GET_PRODUCTS_products;
}

export interface GET_PRODUCTSVariables {
  limit: number;
  start?: number;
  where?: ProductFiltersInput;
  sort?: (string)[] | null;
}

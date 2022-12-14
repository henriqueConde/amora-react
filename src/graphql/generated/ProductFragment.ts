/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFragment
// ====================================================

export interface ProductFragment_brand_data_attributes {
  __typename: "Brand";
  name: string;
}

export interface ProductFragment_brand_data {
  __typename: "BrandEntity";
  attributes: ProductFragment_brand_data_attributes;
}

export interface ProductFragment_brand {
  __typename: "BrandEntityResponse";
  data: ProductFragment_brand_data;
}

export interface ProductFragment_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface ProductFragment_cover_data {
  __typename: "UploadFileEntity";
  attributes: ProductFragment_cover_data_attributes;
}

export interface ProductFragment_cover {
  __typename: "UploadFileEntityResponse";
  data: ProductFragment_cover_data;
}

export interface ProductFragment {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  brand: ProductFragment_brand;
  cover: ProductFragment_cover;
}

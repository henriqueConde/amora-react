/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: Highlight
// ====================================================

export interface Highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface Highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: Highlight_background_data_attributes;
}

export interface Highlight_background {
  __typename: "UploadFileEntityResponse";
  data: Highlight_background_data;
}

export interface Highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface Highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: Highlight_floatImage_data_attributes;
}

export interface Highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: Highlight_floatImage_data;
}

export interface Highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: Highlight_background;
  floatImage: Highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  left = "left",
  right = "right",
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = "primary",
  seconday = "seconday",
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = "normal",
  small = "small",
}

export enum ENUM_PRODUCT_RATING {
  star1 = "star1",
  star2 = "star2",
  star3 = "star3",
  star4 = "star4",
  star5 = "star5",
}

export interface BrandFiltersInput {
  id?: IDFilterInput;
  name?: StringFilterInput;
  slug?: StringFilterInput;
  products?: ProductFiltersInput;
  createdAt?: DateTimeFilterInput;
  updatedAt?: DateTimeFilterInput;
  publishedAt?: DateTimeFilterInput;
  and?: (BrandFiltersInput)[];
  or?: (BrandFiltersInput)[];
  not?: BrandFiltersInput;
}

export interface CategoryFiltersInput {
  id?: IDFilterInput;
  name?: StringFilterInput;
  slug?: StringFilterInput;
  products?: ProductFiltersInput;
  createdAt?: DateTimeFilterInput;
  updatedAt?: DateTimeFilterInput;
  publishedAt?: DateTimeFilterInput;
  and?: (CategoryFiltersInput)[];
  or?: (CategoryFiltersInput)[];
  not?: CategoryFiltersInput;
}

export interface DateFilterInput {
  and?: (any)[];
  or?: (any)[];
  not?: DateFilterInput;
  eq?: any;
  eqi?: any;
  ne?: any;
  startsWith?: any;
  endsWith?: any;
  contains?: any;
  notContains?: any;
  containsi?: any;
  notContainsi?: any;
  gt?: any;
  gte?: any;
  lt?: any;
  lte?: any;
  null?: boolean;
  notNull?: boolean;
  in?: (any)[];
  notIn?: (any)[];
  between?: (any)[];
}

export interface DateTimeFilterInput {
  and?: (any)[];
  or?: (any)[];
  not?: DateTimeFilterInput;
  eq?: any;
  eqi?: any;
  ne?: any;
  startsWith?: any;
  endsWith?: any;
  contains?: any;
  notContains?: any;
  containsi?: any;
  notContainsi?: any;
  gt?: any;
  gte?: any;
  lt?: any;
  lte?: any;
  null?: boolean;
  notNull?: boolean;
  in?: (any)[];
  notIn?: (any)[];
  between?: (any)[];
}

export interface FloatFilterInput {
  and?: (number)[];
  or?: (number)[];
  not?: FloatFilterInput;
  eq?: number;
  eqi?: number;
  ne?: number;
  startsWith?: number;
  endsWith?: number;
  contains?: number;
  notContains?: number;
  containsi?: number;
  notContainsi?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  null?: boolean;
  notNull?: boolean;
  in?: (number)[];
  notIn?: (number)[];
  between?: (number)[];
}

export interface IDFilterInput {
  and?: (string)[];
  or?: (string)[];
  not?: IDFilterInput;
  eq?: string;
  eqi?: string;
  ne?: string;
  startsWith?: string;
  endsWith?: string;
  contains?: string;
  notContains?: string;
  containsi?: string;
  notContainsi?: string;
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
  null?: boolean;
  notNull?: boolean;
  in?: (string)[];
  notIn?: (string)[];
  between?: (string)[];
}

export interface LineFiltersInput {
  id?: IDFilterInput;
  name?: StringFilterInput;
  slug?: StringFilterInput;
  products?: ProductFiltersInput;
  createdAt?: DateTimeFilterInput;
  updatedAt?: DateTimeFilterInput;
  publishedAt?: DateTimeFilterInput;
  and?: (LineFiltersInput)[];
  or?: (LineFiltersInput)[];
  not?: LineFiltersInput;
}

export interface PerfurmerFiltersInput {
  id?: IDFilterInput;
  name?: StringFilterInput;
  slug?: StringFilterInput;
  products?: ProductFiltersInput;
  createdAt?: DateTimeFilterInput;
  updatedAt?: DateTimeFilterInput;
  publishedAt?: DateTimeFilterInput;
  and?: (PerfurmerFiltersInput)[];
  or?: (PerfurmerFiltersInput)[];
  not?: PerfurmerFiltersInput;
}

export interface ProductFiltersInput {
  id?: IDFilterInput;
  name?: StringFilterInput;
  slug?: StringFilterInput;
  short_descritpion?: StringFilterInput;
  description?: StringFilterInput;
  price?: FloatFilterInput;
  release_date?: DateFilterInput;
  rating?: StringFilterInput;
  brand?: BrandFiltersInput;
  categories?: CategoryFiltersInput;
  line?: LineFiltersInput;
  perfurmers?: PerfurmerFiltersInput;
  promotionalPrice?: FloatFilterInput;
  createdAt?: DateTimeFilterInput;
  updatedAt?: DateTimeFilterInput;
  publishedAt?: DateTimeFilterInput;
  and?: (ProductFiltersInput)[];
  or?: (ProductFiltersInput)[];
  not?: ProductFiltersInput;
}

export interface StringFilterInput {
  and?: (string)[];
  or?: (string)[];
  not?: StringFilterInput;
  eq?: string;
  eqi?: string;
  ne?: string;
  startsWith?: string;
  endsWith?: string;
  contains?: string;
  notContains?: string;
  containsi?: string;
  notContainsi?: string;
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
  null?: boolean;
  notNull?: boolean;
  in?: (string)[];
  notIn?: (string)[];
  between?: (string)[];
}

//==============================================================
// END Enums and Input Objects
//==============================================================

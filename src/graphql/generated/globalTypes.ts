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
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  products?: ProductFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (BrandFiltersInput | null)[] | null;
  or?: (BrandFiltersInput | null)[] | null;
  not?: BrandFiltersInput | null;
}

export interface CategoryFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  products?: ProductFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (CategoryFiltersInput | null)[] | null;
  or?: (CategoryFiltersInput | null)[] | null;
  not?: CategoryFiltersInput | null;
}

export interface DateFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface DateTimeFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateTimeFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface FloatFilterInput {
  and?: (number | null)[] | null;
  or?: (number | null)[] | null;
  not?: FloatFilterInput | null;
  eq?: number | null;
  eqi?: number | null;
  ne?: number | null;
  startsWith?: number | null;
  endsWith?: number | null;
  contains?: number | null;
  notContains?: number | null;
  containsi?: number | null;
  notContainsi?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (number | null)[] | null;
  notIn?: (number | null)[] | null;
  between?: (number | null)[] | null;
}

export interface IDFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: IDFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface LineFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  products?: ProductFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (LineFiltersInput | null)[] | null;
  or?: (LineFiltersInput | null)[] | null;
  not?: LineFiltersInput | null;
}

export interface PerfurmerFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  products?: ProductFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (PerfurmerFiltersInput | null)[] | null;
  or?: (PerfurmerFiltersInput | null)[] | null;
  not?: PerfurmerFiltersInput | null;
}

export interface ProductFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  short_descritpion?: StringFilterInput | null;
  description?: StringFilterInput | null;
  price?: FloatFilterInput | null;
  release_date?: DateFilterInput | null;
  rating?: StringFilterInput | null;
  brand?: BrandFiltersInput | null;
  categories?: CategoryFiltersInput | null;
  line?: LineFiltersInput | null;
  perfurmers?: PerfurmerFiltersInput | null;
  promotionalPrice?: FloatFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (ProductFiltersInput | null)[] | null;
  or?: (ProductFiltersInput | null)[] | null;
  not?: ProductFiltersInput | null;
}

export interface StringFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: StringFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

import { QueryHookOptions, useQuery } from '@apollo/client'
import {
  GET_PRODUCTS,
  GET_PRODUCTSVariables
} from 'graphql/generated/GET_PRODUCTS'
import { QUERY_PRODUCTS } from 'graphql/queries/products'

export function useQueryProducts(
  options?: QueryHookOptions<GET_PRODUCTS, GET_PRODUCTSVariables>
) {
  return useQuery<GET_PRODUCTS, GET_PRODUCTSVariables>(QUERY_PRODUCTS, options)
}

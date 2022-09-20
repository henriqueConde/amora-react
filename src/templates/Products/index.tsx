import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ProductCard, { ProductCardProps } from 'components/ProductCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import { GET_PRODUCTS } from 'graphql/generated/GET_PRODUCTS'
import { mapProducts } from 'utils/queriesMappers'
import { useEffect, useState } from 'react'
import { useQueryProducts } from 'hooks/useQueryProducts'
import Loading from 'components/Loading'
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere
} from 'utils/filters'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'

export type ProductsTemplateProps = {
  products?: ProductCardProps[]
  filterItems: ItemProps[]
}

const ProductsTemplate = ({ filterItems }: ProductsTemplateProps) => {
  const { push, query } = useRouter()
  console.log(query)
  const { data, fetchMore, error, loading } = useQueryProducts({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 2,
      where: query
        ? parseQueryStringToWhere({ queryString: query, filterItems })
        : null,
      sort: query.sort ? [query?.sort as string] : null
    }
  })

  const [availableProds, setAvailableProds] = useState<ProductCardProps[]>()
  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    setIsLastPage(false)
    push({
      pathname: '/products',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    const limit = 3
    if (availableProds) {
      fetchMore({
        variables: { limit, start: page },
        updateQuery: (preResult, { fetchMoreResult }) => {
          const fetchMoreProds = mapProducts(fetchMoreResult)
          const newAvailableProds = [...availableProds, ...fetchMoreProds]
          if (fetchMoreProds.length < limit) {
            setIsLastPage(true)
          }
          setAvailableProds(newAvailableProds)
          return preResult
        }
      })
    }
  }

  useEffect(() => {
    data && setAvailableProds(mapProducts(data as GET_PRODUCTS))
  }, [data])

  useEffect(() => {
    availableProds && setPage(availableProds.length)
  }, [availableProds])

  return (
    <Base>
      <S.Main>
        {error && <p>{error.message}</p>}
        <>
          <ExploreSidebar
            initialValues={parseQueryStringToFilter({
              queryString: query,
              filterItems
            })}
            items={filterItems}
            onFilter={handleFilter}
          />

          <section>
            <Grid>
              {(availableProds as ProductCardProps[])?.map((item) => (
                <ProductCard key={item.title} {...item} />
              ))}
            </Grid>
            {loading ? (
              <Loading />
            ) : (
              !isLastPage && (
                <S.ShowMore role="button" onClick={handleShowMore}>
                  <p>Show More</p>
                  <ArrowDown size={35} />
                </S.ShowMore>
              )
            )}
          </section>
        </>
      </S.Main>
    </Base>
  )
}

export default ProductsTemplate

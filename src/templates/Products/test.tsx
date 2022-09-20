import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { MockedProvider } from '@apollo/client/testing'

import Products from '.'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import { productsResponseMock } from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Products />', () => {
  it('should render sections', async () => {
    const { container } = renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_PRODUCTS,
              variables: { limit: 5 }
            },
            result: {
              ...productsResponseMock
            }
          }
        ]}
        addTypename={false}
      >
        <Products filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await container).toMatchSnapshot()

    expect(await screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})

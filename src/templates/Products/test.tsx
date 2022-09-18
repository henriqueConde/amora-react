import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import perfumesMock from 'components/ProductCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Products from '.'

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

jest.mock('components/ProductCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductCard" />
  }
}))

describe('<Products />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <Products filterItems={filterItemsMock} products={[perfumesMock[0]]} />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})

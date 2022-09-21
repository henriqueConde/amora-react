import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { SessionProvider } from 'next-auth/react'

import Base from '.'

const mockSession = {
  user: { name: 'cintia', email: 'cintiantunes@gmail.com' },
  expires: '2022-10-21T03:21:58.788Z',
  id: 7
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <SessionProvider session={mockSession}>
        <Base>
          <h1>Heading</h1>
        </Base>
      </SessionProvider>
    )

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})

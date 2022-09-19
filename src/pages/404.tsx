import Base from 'templates/Base'
import { Container } from 'components/Container'

export default function Page404() {
  return (
    <Base>
      <Container>
        <p style={{ color: 'white' }}>Oops... page not found</p>
      </Container>
    </Base>
  )
}

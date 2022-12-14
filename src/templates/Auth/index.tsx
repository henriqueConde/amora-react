import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div>
          <Heading size="huge" color="white" lineColor="white">
            With much love you find here carefully curated perfumes
          </Heading>
          <S.Subtitle>
            <strong>Amora</strong> is the most loving perfume store in the
            planet.
          </S.Subtitle>
        </div>

        <S.Footer>Amora 2022 © All rights reserved</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth

import * as S from './styles'

export type LoadingProps = {
  color?: 'black' | 'white'
}

const Loading = ({ color = 'black' }: LoadingProps) => (
  <S.Wrapper>
    <S.Loading data-testid="loading-spinner" color={color} />
  </S.Wrapper>
)

export default Loading

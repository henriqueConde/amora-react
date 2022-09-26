import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }
    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      ${media.lessThan('medium')`
        bottom: 3%;
      `}
      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.primary};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
  `}
`

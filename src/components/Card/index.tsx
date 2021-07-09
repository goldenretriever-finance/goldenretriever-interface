import styled from 'styled-components'

const Card = styled.div<any>`
  width: 100%;
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  background: rgba(0, 0, 0, 0.19);
  border-radius: 6px;
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.tertiary};
`

import styled from '@emotion/styled'

export const Arrow = styled.div<Props> `
    display: inline-block;
    position: absolute;
    left: -10px;
    top: 3px;
    width: ${props => props.theme.spacing.medium}px;
    height: ${props => props.theme.spacing.medium}px;
    border-top: 1px solid ${props => props.color};
    border-right: 1px solid${props => props.color};
    transform:rotate(-135deg);
    transition: all 0.2s ease-in;
`

interface Props {
    color: string
}

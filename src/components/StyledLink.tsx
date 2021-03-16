import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

interface Props {
    color: string
}
export const StyledLink = styled(Link)<Props> `
    color: ${props => props.color};
    text-decoration: none;
    position: relative;
    &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: -5px;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${props => props.color};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
        }

    &:hover {
        &:after { 
        width: 100%; 
        left: 0; 
        }
        & > * {
            transform: rotate(-135deg) translate(2px, -2px)
        }
    }
`
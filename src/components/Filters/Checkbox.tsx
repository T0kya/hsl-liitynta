import styled from '@emotion/styled/macro'
import React, { ChangeEventHandler } from 'react'
const Container = styled.div `
    position: relative;
`

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{checked: boolean}>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
 background-color: ${props => props.checked ?  props.theme.color.primary : props.theme.color.white};
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color.primary};
  transition: all 150ms;
  color: ${props => props.checked ? props.theme.color.white:  props.theme.color.primary};
  font-size: 0.8rem;
  text-align: center;
`
 


interface Props {
    onChange: ChangeEventHandler
    checked: boolean
    name: string
    children: React.ReactNode
  }

export function Checkbox({checked,
  children,
  ...props
}: Props) {
  
  return (
    <Container>
      <HiddenCheckbox
        type="checkbox"
        defaultChecked={checked}
        {...props}
      />
      <StyledCheckbox checked={checked} >{children}</StyledCheckbox>
        
    </Container>
  )
}
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
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
 background-color: ${props => props.checked ?  props.theme.color.green : 'white'};
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color.green};
  transition: all 150ms;
  color: ${props => props.checked ? 'white':  props.theme.color.green};
  font-size: 0.9rem;
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
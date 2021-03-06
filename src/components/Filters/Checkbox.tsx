import styled from '@emotion/styled/macro'
import React, { ChangeEventHandler } from 'react'
const Container = styled.div `
    position: relative;
`
const CheckboxContainer = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 30px;
  color: green;
  font-size: 9px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
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
  background: ${props => (props.checked ? 'green' : 'white')};
  border-radius: 50%;
  border: 2px solid green;
  transition: all 150ms;
color: ${props => (props.checked ? 'white' : 'green')};
font-size: 0.5rem;
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
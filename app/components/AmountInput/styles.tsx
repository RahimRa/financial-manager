import styled from 'styled-components'
import Image from 'next/image'



export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`
export const Label = styled.label`
  font-size: 13px;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: right;


  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`


export const StyledImage = styled(Image)`
  position: absolute;
  height: 15px;
  width: 15px;
  top: 36px;
  left: 7px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`

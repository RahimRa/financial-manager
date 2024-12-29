import styled from 'styled-components'
import Image from 'next/image'

export const Wrapper = styled.div`
  margin: 5px;
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #379bda;
  color: white;
  border-radius: 15px;
  gap: 30%;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #2387af;
    border-radius: 2px;
    padding: 10px;
  }
  &::-webkit-scrollbar-track {
    margin: 16px 15px;
  }
  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }
`
export const InnerWrap = styled.div`
align-items: center;
display: flex;
gap: 5px;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
`

export const StyledImage = styled(Image)`
  height: 35px;
  width: 35px;
  fill: white;
`

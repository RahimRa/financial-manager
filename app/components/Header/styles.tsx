import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-bottom:1px solid black;
`
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
  background-color: #3e67b4;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 12px;

  &:hover {
    background-color: #456ca0;
  }

  &:focus {
    outline: 2px solid #1354ce;
  }
`

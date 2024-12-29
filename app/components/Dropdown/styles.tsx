import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`

export const DropdownButton = styled.button`
  width: 100%;
  margin-left:10px;
  padding: 5px;
  font-size: 14px;
  background-color: #4f9bca;
  color: white;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #456ca0;
  }
  border-radius: 15px;
`

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: white;
  border: none;

  z-index: 1;
`

export const DropdownListItem = styled.li`
  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`
export const Label = styled.label`
  font-size: 13px;
`

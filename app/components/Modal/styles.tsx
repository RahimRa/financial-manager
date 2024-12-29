import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #a3a7a98e;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
  padding-bottom: 10px;
  overflow: hidden;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
`
export const InnerWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  background-color: white;
  height: 600px;
  width: 450px;

  border-radius: 10px;
  padding-top: 40px;
  padding-bottom: 40px;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CloseImgWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  position: absolute;
  top: 10px;
  left: 420px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
`
export const OptionImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`

export const Button = styled.button`
  background-color: #4f9bca;
  border: none;
  border-radius: 15px;
  height: 40px;
  width: 80%;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #456ca0;
  }

  &:focus {
    outline: 2px solid #1354ce;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    pointer-events: none;
  }
`

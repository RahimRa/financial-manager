import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f9fafb;
  margin-top: 10px;
  padding: 0px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-y: auto;
  max-height: 80vh;
`

export const FixedHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: #f9fafb;
  margin: 0;
  padding: 10px 20px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`

export const TableHeader = styled.th`

  font-weight: bold;
  font-size: 14px;
  color: #2c3e50;
  padding: 12px 16px;
  text-align: left;
`
export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`

export  const FilterSelect = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

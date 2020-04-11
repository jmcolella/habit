import styled from 'styled-components';

const Row = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-row
  width: 100%;
`;

interface ColumnProps {
  columns: number,
  rowSpan: number,
  offset: number,
}

const Column = styled.div<ColumnProps>`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  grid-column: ${({ offset }) => (offset ? `${offset + 1} / ` : '')} span ${(props) => (props.columns ? props.columns : '12')};
  ${({ rowSpan }) => (rowSpan ? `grid-row: span ${rowSpan};` : '')}
  width: 100%;

  > * {
    flex-grow: 1;
  }
`;

export default {
  Row,
  Column
};
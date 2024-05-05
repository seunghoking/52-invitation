import styled from 'styled-components';

interface WidthProps {
  width: number;
}

interface HeightProps {
  height: number;
}

export const MarginWidth = styled.div<WidthProps>`
  width: ${({ width }) => width}px;
`;

export const MarginHeight = styled.div<HeightProps>`
  height: ${({ height }) => height}px;
`;

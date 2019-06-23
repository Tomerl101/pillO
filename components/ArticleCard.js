import styled from 'styled-components';

export const ArticleCard = styled.View`
  background: #fff;
  height: ${props => (props.height ? props.height + 'px' : '150px')};
  width: ${props => (props.width ? props.width + 'px' : '340px')};
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 20px;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
`;

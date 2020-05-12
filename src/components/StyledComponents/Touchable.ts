import React from 'react';
import styled from 'styled-components/native';

interface TouchableProps {
  hidden?: boolean;
}

export const StyledButton = styled.TouchableOpacity`
  background-color: #4630eb;
  height: 60px;
  width: 100%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

export const SwipableButton = styled.TouchableOpacity`
  height: 88px;
  width: 85%;
  margin-top: 24px;
  background-color: #1b1f1b;
  padding: 5px;
  justify-content: center;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;
  elevation: 5;
`;

export const TouchableButton = styled.TouchableOpacity<TouchableProps>`
  margin-right: 15px;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
`;

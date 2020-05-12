import React from 'react';
import styled from 'styled-components/native';

interface InputProps {
  dark?: true;
  size?: 'small' | 'default' | 'big';
}

export const StyledInput = styled.TextInput<InputProps>`
  flex: 1;
  color: ${(props) =>
    props.dark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  text-align: center;
`;

import React from 'react';
import styled from 'styled-components/native';

interface StyledTextProps {
  size?: 'small' | 'default' | 'big';
  color?: 'white' | 'dark';
}

export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) =>
    props.color && props.color === 'dark'
      ? 'rgba(0, 0, 0, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'default':
        return '18px';
      case 'big':
        return '24px';
      default:
        return '18px';
    }
  }};
  font-weight: bold;
`;

export const Title = styled.Text`
  color: #070709;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
`;

export const ButtonText = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 32px;
  font-weight: bold;
`;

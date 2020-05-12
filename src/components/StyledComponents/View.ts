import React from 'react';
import styled from 'styled-components/native';

interface ViewProps {
  flex?: number;
  padding?: string;
  background?: string;
  align?: string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit';
  height?: number;
  width?: string;
  direction?: 'row' | 'column';
  marginBottom?: number;
}

interface CircleProps {
  background?: string;
  diameter?: number;
}

export const StyledView = styled.View<ViewProps>`
  flex: ${(props) => props.flex || 1};
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  background-color: ${(props) =>
    props.background ? props.background : '#8b863e'};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : 0};
`;

export const HopListTitleWrapper = styled(StyledView)`
  background-color: #5b6239;
  justify-content: space-between;
  flex-direction: row;
`;

export const StyledCard = styled.View`
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  elevation: 5;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  margin-bottom: 34px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #8b863e;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.View`
  flex: 1;
  width: 100%;
  margin: 0;
`;

export const ButtonView = styled.View`
  flex: 2;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #8b863e;
`;

export const Box = styled(StyledView)`
  flex: 1;
  background-color: #5b6239;
  flex-direction: row-reverse;
  margin-top: 16px;
  padding: 0 10px;
  height: ${(props) => (props.height ? `${props.height}px` : '48px')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  border-top-left-radius: ${(props) =>
    props.height ? `${props.height / 2}px` : '24px'};
  border-bottom-left-radius: ${(props) =>
    props.height ? `${props.height / 2}px` : '24px'};
  elevation: 5;
`;

export const LeftBox = styled.View`
  flex: 1;
  background-color: #8b863e;
  flex-direction: row;
  margin-top: 10px;
  padding: 0 10px;
  width: 90%;
  height: 100px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  elevation: 5;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TextInputWrapper = styled.View`
  width: 100px;
  height: 32px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled(StyledView)`
  flex: 4;
  background-color: #5b6239;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
`;

export const Wrapper = styled(StyledView)`
  background-color: #5b6239;
`;

export const Circle = styled.View<CircleProps>`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: ${(props) =>
    props.diameter ? `${props.diameter / 2}px` : '34px'};
  background-color: ${(props) =>
    props.background ? props.background : '#fcff00'};
  elevation: 5;
`;

// height: ${(props) => (props.diameter ? `${props.diameter}px` : '68px')};
// width: ${(props) => (props.diameter ? `${props.diameter}px` : '68px')};

import { Platform } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px ${Platform.OS === 'android' ? '150px' : '40px'};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4edd8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4efe8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${Platform.OS === 'ios' ? getBottomSpace() : 16}px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CreateAccountText = styled.Text`
  margin-left: 16px;
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;

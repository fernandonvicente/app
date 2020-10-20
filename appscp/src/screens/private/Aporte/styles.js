import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
`;

export const Title = styled.Text`
   font-size: 20px;
   color: #fff;
   font-weight: bold;
   align-self: center;
   margin-top: 10px;
   margin-bottom: 10px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 30 },
})``;

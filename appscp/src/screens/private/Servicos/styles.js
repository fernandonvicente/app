import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ServicesList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2,
})`
    margin-top: 60px;
    padding: 0 20px;
`;

export const ServicesRow = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 1px;
`;

export const Services = styled(RectButton)`
   background: #fff;
   border-radius: 4px;
   padding: 20px;
   flex: 1;

   align-items: center;
   margin: 10px 10px 10px;
`;

export const Title = styled.Text`
   font-size: 20px;
   color: #fff;
   font-weight: bold;
   align-self: center;
   margin-top: 10px;
   margin-bottom: 10px;
`;

export const Avatar = styled.Image`
   width: 50px;
   height: 50px;
   border-radius: 25px;
`;

export const Name = styled.Text`
   margin-top: 15px;
   font-size: 14px;
   font-weight: bold;
   color: #333;
   text-align: center;
`;

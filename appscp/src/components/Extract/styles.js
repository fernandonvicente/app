import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 4px;
    background: #fff;
 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const IconOption = styled.View`
    width: 20px;
    height: 10px;
    border-radius: 25px;
`;


export const Info = styled.View`
    margin-left: 25px;
    flex: 2;
`;

export const Currency = styled.View`
    margin-left: 15px;
    flex: 1;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #333;
`;

export const Time = styled.Text`
    font-size: 15px;
    color: #999;
    margin-top: 4px;
`;
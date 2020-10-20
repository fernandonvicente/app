import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    
`;

//parte de fechamento
export const RowClosure = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 1px;
`;

export const InfoClosure = styled.View`
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    flex: 1;

    align-items: center;
    margin: 10px 10px 10px;
`;

export const TitleClosure = styled.Text`    
    font-size: 12px;
    color: #999;    
`;

export const ValueClosure = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #333;
    margin-top: 4px;
`;


//parte de fechamento
export const RowCurrentCapital = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 1px;
`;

export const InfoCurrentCapital = styled.View`
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    flex: 1;

    align-items: center;
    margin: 10px 10px 10px;
`;

export const TitleCurrentCapital = styled.Text` 
    font-weight: bold;   
    font-size: 16px;
    color: #999;    
`;

export const ValueCurrentCapital = styled.Text`
    font-weight: bold;
    font-size: 30px;
    color: #333;
    margin-top: 4px;
`;

//parte de detalhamento
export const DetailingRowCurrentCapital = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 1px;
`;

export const DetailingCurrentCapital = styled.View`
justify-content: space-around;
    align-items: center;
    padding: 1px;
`;

export const DetailingCurrentCapitalLeft = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const DetailingCurrentCapitalRight = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const TitleDetailing = styled.Text` 
    font-weight: bold;   
    font-size: 16px;
    color: #0088cc;    
`;
export const SubTitleDetailing = styled.Text` 
    margin-top: 10px;
    font-weight: bold;   
    font-size: 16px;
    color: #333;    
`;
export const ResultSubTitleDetailing = styled.Text` 
    font-weight: bold;   
    font-size: 16px;
    color: #999;    
`;

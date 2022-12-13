import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';
import {theme} from '../../../styles';
import { FieldText } from '../FieldText';

export const SelectedItens = ({
    error,
    value,
    itens,
    marginTop,
    onChange,
    filterSelected,
}) => {
    const getChange = (value) =>{
        onChange(value,filterSelected)
    }
    return (
        <View>
            <InputContainer marginTop={marginTop}>
                        <Picker
                            style={styles.container}
                            selectedValue={value}
                            onValueChange ={(itemValue) =>
                                getChange(itemValue)
                            }
                            >
                            {itens.map((item) =>
                              (<Picker.Item label={item.nome} value={item.value}/>)
                            )}
                           
                        </Picker>
            </InputContainer>
            {error && <FieldText
                            marginTop={8}
                            fontFamily="regular"
                            color="red"
                            size={12}>{error}</FieldText>}
        </View>
        
    )
}

const InputContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ dir }) => dir || 'row'};
  width: ${({ theme }) => theme.metrics.px(256)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  border-radius: ${({ theme }) => theme.metrics.px(4)};
  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.ocean};
  padding: ${({ theme }) => theme.metrics.px(6)}px;
  margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
  margin-bottom: ${({ theme, marginBottom }) => theme.metrics.px(marginBottom || 0)}px;
  margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
  margin-right: ${({ theme, marginRight }) => theme.metrics.px(marginRight || 0)}px;
`
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: theme.colors.ocean,
        borderWidth: 5,
    },
});
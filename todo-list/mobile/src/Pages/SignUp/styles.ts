import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color:${props => props.theme.colors.primary};
  align-items: center;
`
export const Title = styled.Text``
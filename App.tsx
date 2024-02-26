import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native"
import Groups from "@screens/Groups";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native'

import theme from './src/theme'
import { Loading } from "./src/Components/Loading";
import { NewGroup } from "src/Components/NewGroup";

export default function App() {
  const [fontsLoaded] =  useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}> 
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
       />
        {fontsLoaded ? <NewGroup /> : <Loading /> }
    </ThemeProvider>
  );
}



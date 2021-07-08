/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {
  DarkTheme as PaperDarkTheme,
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import Navigator from 'app/navigation';
import configureStore from 'app/store';
import { IThemeState } from 'app/models/reducers/theme';
const fontConfig = {
  android: {
    regular: {
      fontFamily: 'fantasy',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'fantasy',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'fantasy',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'fantasy',
      fontWeight: 'normal',
    },
  }
};


const PaperThemeDefault = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#3498db'
  },
  fonts:configureFonts(fontConfig)
};

const PaperThemeDark = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#3498db'
  },
  fonts: configureFonts(fontConfig),
};

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};
// Configs theme for app 
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  fonts:configureFonts(fontConfig),
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#000',
    card: '#000',
    text: '#ffffff'
    
  },
};

const { persistor, store } = configureStore();

interface IState {
  themeReducer: IThemeState;
}

// Wrap root navigator by paperProvider for theme 
const RootNavigation: React.FC = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const paperTheme = (!isDark) ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = (!isDark) ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Navigator theme={combinedTheme} />
    </PaperProvider>
  );
};

const Entrypoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default Entrypoint;

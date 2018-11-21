import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import { Routes } from './pages'
import { stores } from './stores'
import { theme } from './themes/app.theme'

import './index.css'

import registerServiceWorker from './registerServiceWorker'

import { IntlProvider, addLocaleData } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import esLocaleData from 'react-intl/locale-data/es';

addLocaleData([...frLocaleData, ...esLocaleData]);

const messages = {
  'en': {
    "Welcome to React": "Welcome to React and react-intl"
  },
  'es': {
    "Welcome to React": "Bienvenido a React y react-intl"
  },
  'fr': {
    "Welcome to React": "Bienvenue a la React et react-intl"
  }
}
const locale = "es";

ReactDOM.render(
  // provider makes all stores available through the app via @inject
  <Provider {...stores}>
    <IntlProvider locale={locale} messages={messages[locale]} key={locale}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()

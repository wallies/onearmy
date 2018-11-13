/******************************************************************************  
This is a simple placeholder page for use while testing translation components
*******************************************************************************/

import * as React from 'react'
import Button from '@material-ui/core/Button'

import i18n from '../../utils/i18n';
import { t } from 'i18next';
import { withNamespaces } from 'react-i18next';

// define the component properties with typing information for fields
// properties are things that will have been passed down from parent component
interface IProps {
  exampleProp?: string
}
// define the component state with typing information for fields
// state is local to the component and will trigger re-render on change
interface IState {
  language: string
}

export class TranslationDemoPage extends React.Component<IProps, IState> {
  // if using props include constructor call
  constructor(props: IProps) {
    super(props)
    // an initial state can be set here, any future changes should be
    this.state = { language: 'en' }
  }
  // functions required by the component can go here. Ideally complex business logic should be seperated out
  public changeLanguage = (lang: string) => {
    this.setState({ language: lang });
    i18n.changeLanguage(lang);
  }
  public reset = () => {
    this.setState({ language: 'en' });
    i18n.changeLanguage('en');
  }
  // here is where the main render method goes
  public render() {
    return (
      <div id="TranslationPage">
        <div>The current language is {this.state.language}</div>
        {/* base components like buttons are imported from material design library */}
        {/* click functions can pass variables or just trigger */}
        <Button onClick={() => this.changeLanguage('en')}>English</Button>
        <Button onClick={() => this.changeLanguage('fr')}>French</Button>
        <Button onClick={() => this.changeLanguage('es')}>Spanish</Button>
        <Button onClick={this.reset}>Reset</Button>
        <h1>{t('Welcome to React')}</h1>
      </div>
    )
  }
}

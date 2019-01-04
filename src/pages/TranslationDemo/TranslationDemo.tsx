/******************************************************************************  
This is a simple placeholder page for use while testing translation components
*******************************************************************************/

import * as React from 'react'

import { t } from 'i18next';

import { ChangeLanguague } from '../../components/ChangeLanguage/ChangeLanguage';

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
  }
  // here is where the main render method goes
  public render() {
    return (
      <div id="TranslationPage">
        <div>The current language is {this.state.language}</div>
        <ChangeLanguague callbackFromParent={this.changeLanguage} />
        <h1>{t('Welcome to React')}</h1>
      </div>
    )
  }
}

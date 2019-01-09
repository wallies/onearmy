import * as React from 'react'
import Button from '@material-ui/core/Button'

import i18n from '../../utils/i18n';

interface IProps {
  callbackFromParent?: any
}

interface IState {
  language: string
}

export class ChangeLanguage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = { language: 'en' };
    }
    public changeLanguage = (lang: string) => {
        this.setState({ language: lang });
        this.props.callbackFromParent(lang);
        i18n.changeLanguage(lang);
    }
    public render() {
        return (
            <div>
                <p id="changeLanguage__currentLanguage">The current language is {this.state.language}</p>
                <Button id="changeLanguage__enButton" onClick={() => this.changeLanguage('en')} >en</Button>
                <Button id="changeLanguage__esButton" onClick={() => this.changeLanguage('es')} >es</Button>
                <Button id="changeLanguage__frButton" onClick={() => this.changeLanguage('fr')} >fr</Button>
                <Button id="changeLanguage__resetButton" onClick={() => this.changeLanguage('en')} >Reset</Button>
            </div>
        )
    }
}

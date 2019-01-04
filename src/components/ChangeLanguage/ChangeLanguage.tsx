import * as React from 'react'
import Button from '@material-ui/core/Button'

import i18n from '../../utils/i18n';

interface IProps {
  callbackFromParent: any
}

interface IState {
  language: string
}

export class ChangeLanguague extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = { language: 'en' }
    }
    public changeLanguage = (lang: string) => {
        this.setState({ language: lang })
        this.props.callbackFromParent(lang);
        i18n.changeLanguage(lang);
    }
    public render() {
        return (
            <div>
                <Button onClick={() => this.changeLanguage('en')}>English</Button>
                <Button onClick={() => this.changeLanguage('fr')}>French</Button>
                <Button onClick={() => this.changeLanguage('es')}>Spanish</Button>
                <Button onClick={() => this.changeLanguage('en')}>Reset</Button>
            </div>
        )
    }
}

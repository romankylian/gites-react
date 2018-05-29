import * as React from 'react';
import '../../styles/index.less';
const gites_logo = require('../../img/gites_logo.png')

export interface HeaderProps {tab_1: string; tab_2: string; tab_3: string; tab_4: string; button_login: string; }

export default class HeaderComponent extends React.Component<HeaderProps> {

  public static defaultProps: Partial<HeaderProps> = {
      tab_1: 'Vakantiehuizen',
      tab_2: 'Bed & Breakfast',
      tab_3: 'Te koop',
      tab_4: 'Adverteren',
      button_login: 'Inloggen',
  };
  render() {
    return (
      <div className='hd-container'>
        
        <ul className='hd-navbar'>
          <li id='hd-navbar-tab'><a href='default.asp'><img className='gites_logo' src={gites_logo} /></a></li>
          <li id='hd-navbar-tab'><a href='default.asp'>{this.props.tab_1}</a></li>
          <li id='hd-navbar-tab'><a href='news.asp'>{this.props.tab_2}</a></li>
          <li id='hd-navbar-tab'><a href='contact.asp'>{this.props.tab_3}</a></li>
          <li id='hd-navbar-tab'><a href='about.asp'>{this.props.tab_4}</a></li>
          <li id='hd-navbar-button'><a href='ghajf.php'>{this.props.button_login} </a></li>
        </ul>
      </div>
    );
  }
}

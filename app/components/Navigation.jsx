 const React = require('react');
const {NavLink} = require('react-router-dom');

class Navigation extends React.Component {

  render() {
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>
              React Timer App (Nav.jsx)
            </li>
            <li>
              <NavLink exact to='/timer' activeClassName='active'>Timer</NavLink>
            </li>
            <li>
              <NavLink exact to='/countdown' activeClassName='active'>Countdown</NavLink>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <ul className='menu'>
            <li className='menu-text'>
              Created by <a href="http://struktur1.com" target="_blank">Alex</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

module.exports = {Navigation};

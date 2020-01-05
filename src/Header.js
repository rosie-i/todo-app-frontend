import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <header className="pageHeader" style={{backgroundColor: "pink"}}>
            <h1 className="pageTitle">Your Tasks</h1>
            <h2 className="pageSubtitle">You can do anything but you can't do everything</h2>
        </header>
      );
    }
}

export default Header;

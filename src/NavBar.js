import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['Home', 'Todo', 'Appointments', 'Notes'];
    const navLinks = pages.map(page => {
      return (
        <a key={page} href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

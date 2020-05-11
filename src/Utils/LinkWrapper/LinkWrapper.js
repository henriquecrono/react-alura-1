import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
    return (
        <NavLink activeStyle={{fontWeight: 'bold'}} activeClassName='active' {...props} />
    );
};

export default LinkWrapper;
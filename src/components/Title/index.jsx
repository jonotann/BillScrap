import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <div className="Title">
            <h2>{props.children}</h2>
        </div>
    );
};

Title.propTypes = {};
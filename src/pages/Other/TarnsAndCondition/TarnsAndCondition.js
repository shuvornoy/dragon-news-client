import React from 'react';
import { Link } from 'react-router-dom';

const TarnsAndCondition = () => {
    return (
        <div>
            <h3>Here is our Terms and conditions</h3>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TarnsAndCondition;
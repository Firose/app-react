import React from 'react';

const authContext = React.createContext({
    logged_out : false,
    sign_out: () => {}
});
export default authContext;
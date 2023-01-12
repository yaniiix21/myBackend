import React from 'react';

// Create a Context object
const UserContext = React.createContext();

// The "Provider Component allows other components to consume/use the cntext object and suppy the necessary information needed to the context object"
export const UserProvider = UserContext.Provider;

export default UserContext;

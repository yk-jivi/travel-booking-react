const loggerMiddleware = store => next => action => {
    console.log("ACTION:", action.type);
    console.log("PAYLOAD:", action.payload);
    console.log("STATE BEFORE:", store.getState());

    const result = next(action);

    console.log("STATE AFTER:", store.getState());
    return result;
};

export default loggerMiddleware;

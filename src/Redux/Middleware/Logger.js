const logger = (store) => (next) => (action) => {
    console.log("current state =>", store.getState());
    console.log("action dispatched =>", action);
    next(action); // without this line process will stop here
    console.log("updated state =>", store.getState());

}
export default logger;
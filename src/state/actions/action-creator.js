function action(type, args) {
  let _action = { type };
  if (args && args.length) {
    _action.value = args[0];
  }
  return _action;
}

function actionCreator(type) {
  return function() {
    return action(type, arguments);
  };
}

export default actionCreator;

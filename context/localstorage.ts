const storage = localStorage;

export const loadState = ():object => {
  try {
    const userState = storage.getItem("appState");
    if (userState === null) {
      return {};
    }

    return JSON.parse(userState);
  } catch (error) {
    return {};
  }
};


export const setLocalState = (state: Object):void => {
  try {
    const serializedState = JSON.stringify(state);

    return storage.setItem("appState", serializedState);
  } catch (error) {}
};

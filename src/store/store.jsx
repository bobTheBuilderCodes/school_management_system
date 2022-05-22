import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import loggerMiddleware from "redux-logger";

import studentsReducer from "../Slices/studentSlice";

export default configureStore({
  reducer: {
    students: studentsReducer,
  },
});

// const persistConfig = {
//   key: "root",
//   storage,
//   stateReconciler: autoMergeLevel2,
// };

// export const store = configureStore({
//   reducer: persistReducer(persistConfig, studentsReducer),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: true }).concat(loggerMiddleware),
//   devTools: true,
// });

// export const persistor = persistStore(store);
// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

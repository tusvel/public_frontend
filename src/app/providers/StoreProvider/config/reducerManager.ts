import {
  type AnyAction,
  combineReducers,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import {
  type MountedReducers,
  type ReducerManager,
  type StateSchema,
  type StateSchemaKey,
} from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemaKey[] = [];
  const mountedReducers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce(state: StateSchema, action: AnyAction) {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add(key: StateSchemaKey, reducer: Reducer) {
      if (!key || reducers[key]) {
        return;
      }

      mountedReducers[key] = true;
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove(key: StateSchemaKey) {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      mountedReducers[key] = false;
      combinedReducer = combineReducers(reducers);
    },
  };
}

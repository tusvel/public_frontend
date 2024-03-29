export type { ScrollSaveSchema } from './model/types/ScrollSaveSchame';
export {
  scrollSaveReducer,
  scrollSaveActions,
} from './model/slices/scrollSaveSlice';
export {
  getScrollSave,
  getScrollSaveByPath,
} from './model/selectors/getScrollSave';

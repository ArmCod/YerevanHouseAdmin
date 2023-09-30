import { combineReducers } from "redux";
import { isAuthReducer } from "./reducers/authReducer";
import { aboutUsReducer } from "./reducers/aboutUsReducer";
import { AdminReducer } from "./reducers/adminReducer";
import { sliderReducer } from "./reducers/sliderReducer";
import { advantagesReducer } from "./reducers/advantagesReducer";
import { countryReducer } from './reducers/countryReducer';
import { infoReducer } from './reducers/infoReducer';
import { conditionReducer } from './reducers/conditionReducer';
import { flatReducer } from './reducers/flatReducer';
import { cooperateReducer } from './reducers/cooperateReducer';
import { regionReducer } from './reducers/regionReducer';

export const rootReducer = combineReducers({
  isAuthReducer,
  aboutUsReducer,
  AdminReducer,
  sliderReducer,
  advantagesReducer,
  countryReducer,
  infoReducer,
  conditionReducer,
  flatReducer,
  cooperateReducer,
  regionReducer
});

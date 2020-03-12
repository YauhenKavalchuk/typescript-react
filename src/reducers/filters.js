import { CHANGE_FILTER } from '../constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, { type, payload = {} }) => {
const { activeFilter } = payload;

  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
}

export default filter;

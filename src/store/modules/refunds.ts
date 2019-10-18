import { ADD_REFUND } from './mutation-types';

export interface RefundState {
  refunds: any[];
}

const initialState: RefundState = {
  refunds: [],
};

export default {
  state: {
    initialState,
  },
  mutations: {
    [ADD_REFUND](state: RefundState, refund: any) {
      state.refunds.unshift(refund);
    },
  },
};

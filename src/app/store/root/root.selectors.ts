import {RootState} from "./root.state";

export const selectRootState = (rootState: any) => rootState.root as RootState;

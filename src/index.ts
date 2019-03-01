import { useState } from 'react';

type SetPartialState<S> = (partialState: Partial<S> | ((prevState: S) => (Partial<S> | S | null))) => void

export function useCombinedState<S>(initialState:S | (() => S)):[S, SetPartialState<S>] {
  const [ combinedState, setCombinedState ] = useState(initialState);

  const setPartialState:SetPartialState<S> = (partialState) => {
    if (typeof partialState === 'function') {
      setCombinedState((prevState) => {
        return {
          ...prevState,
          ...partialState(prevState),
        };
      });
    } else {
      setCombinedState({
        ...combinedState,
        ...partialState,
      });
    }
  };
  return [ combinedState, setPartialState ];
}

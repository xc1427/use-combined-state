# use-combined-state

## Motivation
Restore how `setState` is used before React without hooks. Hooks is awesome. However `setState` should be passed _full state_ as in Redux reducer. You may also find grouping state under a single "namespace" improve readability.

## Usage

```
import useCombinedState from 'use-combined-state';

// ...

const [ state, setState ] = useCombinedState({ visible: true, data: {/* initial data */} });

// ...

setState({
  displayData: data,
})

setState((prevState) => ({
  visible: !prevState.visible,
}))

<SomeComponent visible={state.visible}>
```
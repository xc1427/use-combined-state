# use-combined-state

## Motivation
Restore how `setState` is used before React without hooks. Hooks is awesome. However `setState` should be passed _full state_ as value returned in Redux reducer. You may also find grouping state under a single "namespace" improve readability.

## Usage

```js
import useCombinedState from 'use-combined-state';

// ...

const [ state, setState ] = useCombinedState({ visible: true, data: { titi: 'toto' } });


// set partial state to update, preserve `data` field.
setState({
  visible: false,
})

setState((prevState) => ({
  visible: !prevState.visible, // can passed a function which sets partial state
}))

<SomeComponent visible={state.visible}>
```
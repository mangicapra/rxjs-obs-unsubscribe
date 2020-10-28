### Auto unsubscribe observables

#### Class decorator that will unsubscribe all observables inside component

## Installation

`npm i rxjs-obs-unsubscribe --save`

## Usage

First inside your `tsconfig.json` enable:
`"emitDecoratorMetadata": true`
`"experimentalDecorators": true`

### Options

| Option      | Description                                            | Default Value |
| ----------- | ------------------------------------------------------ | ------------- |
| `event`     | a name of event callback to execute on                 | `ngOnDestroy` |

Note: `event` can be set to any method or lifecycle hook e.g. `componentDidUnmount` for react.
### Auto unsubscribe observables

#### Class decorator that will unsubscribe all observables inside component

## Installation

`npm i rxjs-obs-unsubscribe --save`

## Usage

First inside your `tsconfig.json` enable: `"emitDecoratorMetadata"` and `"experimentalDecorators"`

```js
import { ObsUnsubscribe } from 'rxjs-obs-unsubscribe';

@ObsUnsubscribe()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: Subscription; // it supports single Subscription
  sub$: Subscription[]; // or array of Subscriptions

  constructor( private productService: ProductService ) {}

  ngOnInit() {
    his.products$ = this.productService.getProducts().subscribe(res => ... );
    this.sub$ = [
        this.productService.obsOne().subscribe(res => ... ),
        this.productService.obsTwo().subscribe(res => ... ),
        ...
    ];
  }

  // Method(event) that is specified as decorator option must be present
  // otherwise it will throw error, it can stay empty
  ngOnDestroy(): void {}
  
```

Optionaly pass `event` to decorator so unsubscribe can happen inside it:
`@ObsUnsubscribe({event: 'componentWillUnmount'})`

### Options

| Option      | Description                                            | Default Value |
| ----------- | ------------------------------------------------------ | ------------- |
| `event`     | a name of event callback to execute on                 | `ngOnDestroy` |

Note: `event` can be set to any method or lifecycle hook e.g. `componentWillUnmount` for react.

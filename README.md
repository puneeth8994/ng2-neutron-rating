# NeutronStarRating

Built on angular 5, star rating library. Can be used for your angular applications.

## How to Use

Step 1 - Import in your app module

```js
import { NeutronRatingModule } from 'neutron-star-rating';

@NgModule({
  declarations: [
    
  ],
  imports: [
    NeutronRatingModule
  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule { }
```

Step 2 - Include it in your component

```js
import { NeutronRatingModule } from 'neutron-star-rating';

@Component({
  selector: 'your-selector',
  templateUrl: 'your template',
  styleUrls: ['./your css'],
  providers: [yourProviders]
})
```

Step 3 - Start using it in your HTML

```html
<neutron-rating [rating]='4' [starColour]="'#FDD835'" [starSize]="4"></neutron-rating>
```

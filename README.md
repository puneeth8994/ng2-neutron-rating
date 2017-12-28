# NeutronStarRating

Built on angular 5, star rating library. Can be used for your angular applications.

## How to Use

**Step 1** - Import in your app module

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

**Step 2** - Include it in your component

```js
import { NeutronRatingModule } from 'neutron-star-rating';

@Component({
  selector: 'your-selector',
  templateUrl: 'your template',
  styleUrls: ['./your css'],
  providers: [yourProviders]
})
```

**Step 3** - Start using it in your HTML

```html
<neutron-rating [rating]='4' [starColour]="'#FDD835'" [starSize]="4"></neutron-rating>
```


## Additional Functions

* Passing the new rating to your component

**Step 1** - Add an additional attribute to detect the rating clicked in your html.

```html
<neutron-rating [rating]='4' [starColour]="'#FDD835'" [starSize]="4" (ratingClicked)='onRatingClicked($event)'></neutron-rating>
```

**Step 2** - Create a function such as onRatingClicked and retrieve the rating from there

```js
public onRatingClicked = (ratingNumICanUseInMyComponent) => {

  console.log("my new rating that I can use in my component is ");
  console.log(ratingNumICanUseInMyComponent);
}
```

* Passing the new rating to your component

**Step 1** - Add an additional attribute (starNum) to change the number of stars

```diff
- Warning - If your rating exceeds the number of stars, your rating would be equal to the number of stars
```

```html
<neutron-rating [rating]='4' [starColour]="'#FDD835'" [starSize]="4" (ratingClicked)='onRatingClicked($event)' [starNum]="10"></neutron-rating>
```

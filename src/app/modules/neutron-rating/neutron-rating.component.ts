import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'neutron-rating',
  templateUrl: './neutron-rating.component.html',
  styleUrls: ['./neutron-rating.component.css']
})
export class NeutronRatingComponent implements OnInit {

  constructor() { }

  public fullIcon = "★";
  public emptyIcon = "☆";

  public starWidth: number;
  public ratingArr: any = []
  @Input() rating: number;
  @Input() starSize: number;
  @Input() starColour: any;

  @Output() ratingClicked: EventEmitter<number> = 
      new EventEmitter<number>()

  public passNewRating: any = (newRating) => {

      newRating = (newRating > 5) ? 5 : newRating;

      newRating = Math.floor(newRating);

      this.rating = newRating;

      console.log("new rating is "+newRating);

      this.ratingArr = [];

      for(let i=0; i < newRating; i++) {
  
        this.ratingArr.push(this.fullIcon);
      }
  
      let ratingLeft = 5 - newRating;

      for(let j=0; j < ratingLeft; j++) {

        this.ratingArr.push(this.emptyIcon)
      }

    this.ratingClicked.emit(newRating)

  }

  ngOnInit(): void {

    console.log("colour is "+this.starColour);
    console.log("size is "+this.starSize);
    console.log("rating is "+this.rating);

    this.rating = Math.floor(this.rating);

    for(let i=0; i< this.rating; i++) {

      this.ratingArr.push(this.fullIcon);
    }

    let ratingLeft = 5 - this.rating;

    for(let j=0; j < ratingLeft; j++) {

      this.ratingArr.push(this.emptyIcon)
    }
    
    console.log(this.ratingArr);
  }

  ngOnChanges(): void {

  }

  // ngOnInit() {
  // }

}


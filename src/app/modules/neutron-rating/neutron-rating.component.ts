import { Component, OnInit, OnChanges, Input, EventEmitter, Output, HostListener } from '@angular/core';

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
  public existingRatingArr = [];
  public initialHoveredRating;
  @Input() rating: number;
  @Input() starSize: number;
  @Input() starColour: any;
  @Input() starNum: number;

  @Output() ratingClicked: EventEmitter<number> =
    new EventEmitter<number>()

  ngOnInit(): void {

    this.initializeStars();
  }

  ngOnChanges(): void {

  }

  public initializeStars = () => {

    this.rating = Math.floor(this.rating);

    let numberOfStars = (this.starNum) ? this.starNum : 5;

    let newRating = (this.rating > numberOfStars) ? numberOfStars : this.rating;

    if (this.rating > numberOfStars) {

      console.log("Warning: your rating exceeds the number of stars hence the rating = number of stars ");
    } else { }

    for (let i = 0; i < newRating; i++) {

      this.ratingArr.push(this.fullIcon);
    }

    let ratingLeft = numberOfStars - this.rating;

    for (let j = 0; j < ratingLeft; j++) {

      this.ratingArr.push(this.emptyIcon)
    }

    this.existingRatingArr = this.ratingArr;

    console.log(this.ratingArr);
  }

  public passNewRating: any = (newRating) => {

    let numberOfStars = (this.starNum) ? this.starNum : 5;

    newRating = (newRating > numberOfStars) ? numberOfStars : newRating;

    newRating = Math.floor(newRating);

    this.rating = newRating;

    //console.log("new rating is " + newRating);

    this.ratingArr = [];

    for (let i = 0; i < newRating; i++) {

      this.ratingArr.push(this.fullIcon);
    }

    let ratingLeft = numberOfStars - newRating;

    for (let j = 0; j < ratingLeft; j++) {

      this.ratingArr.push(this.emptyIcon)
    }

    this.ratingClicked.emit(newRating)

    this.existingRatingArr = this.ratingArr;

  }

  public onHoverEvent: any = (hoveredRating) => {

    let numberOfStars = (this.starNum) ? this.starNum : 5;

    this.ratingArr = [];

    for (let i = 0; i < hoveredRating; i++) {

      this.ratingArr.push(this.fullIcon);
    }

    let ratingLeft = numberOfStars - hoveredRating;

    for (let j = 0; j < ratingLeft; j++) {

      this.ratingArr.push(this.emptyIcon)
    }

    this.initialHoveredRating = hoveredRating;

  }

  // @HostListener('mouseenter') onMouseEnter(something) {
    
  //   console.log("bla bla is "+something);
  // }

  public changeHovered: any = (a) => {

    //console.log("moving 1");
    //console.log(a);
  }

  public overStars = ($event) => {

  }


  public onHoverExitEvent: any = () => {

    this.ratingArr = this.existingRatingArr;
  }

}


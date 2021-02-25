import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageUrl = "";

  posts = [
    { imageUrl: '../../assets/products/pieces_of_meat.jpg' },
    { imageUrl: '../../assets/products/pieces_of_meat.jpg' },
    { imageUrl: '../../assets/products/pieces_of_meat.jpg' },
    { imageUrl: '../../assets/products/pieces_of_meat.jpg' },
    { imageUrl: '../../assets/products/pieces_of_meat.jpg' },
    { imageUrl: '../../assets/products/pieces_of_meat.jpg' },
    
  ];

  
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { 
     let realll= this.walmartItems.concat(this.homeDepotItems);
     var def = realll.concat(this.targetItems);
     this.realproducts = def;
     console.log(def);
     
  }
  products = [
    {
    id: 'first',
    qty: 0,
    image: 'assets/img/gallery/product-details1.png',
    title: 'Iron maroon chair',
    price: 180,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`
  },
  {
    id: 'second',
    qty: 0,
    image: 'assets/img/gallery/product-details2.png',
    title: 'Sun orange plastic chair',
    price: 120,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
                 fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`
  },
  {
    id: 'third',
    image: 'assets/img/gallery/product-details3.png',
    title: 'Brown foam stuffed sofa',
    price: 258,
    qty: 0,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
                 fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                 of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                 left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                  an insurance office. After moving to London and then Hampton, she eventually married her next door
                  neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                   1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                    Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                     that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                      birthday and it was with this that she produced her first significant work, a half-length portrait of
                     a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                      Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                      this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                       of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                       reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                       all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                        for one person creating less`
  },
  {
    id: 'fourth',
    qty: 0,
    title: 'Fluffy wooden maroon sofa',
    price: 180,
    category: 'Household',
    image: 'assets/img/gallery/product-details4.png',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'fifth',
    qty: 0,
    title: 'Fluffy wooden maroon sofa',
    price: 356,
    category: 'Household',
    image: 'assets/img/gallery/product-details5.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'six',
    qty: 0,
    title: 'Fluffy wooden maroon sofa',
    price: 241,
    category: 'Household',
    image: 'assets/img/gallery/product-details6.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'seven',
    qty: 0,
    title: 'Fluffy wooden maroon sofa',
    price: 444,
    category: 'Household',
    image: 'assets/img/gallery/product-details7.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'eight',
    qty: 0,
    title: 'Fluffy wooden maroon sofa',
    price: 494,
    category: 'Household',
    image: 'assets/img/gallery/product-details8.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  }
];

productsfirst = [
  {
    id: 'first',
    image: 'assets/img/gallery/product-details1.png',
    title: 'Iron maroon chair',
    price: 180,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`
  },
  {
    id: 'second',
    image: 'assets/img/gallery/product-details2.png',
    title: 'Sun orange plastic chair',
    price: 120,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
                 fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`
  },
  {
    id: 'eight',
    title: 'Fluffy wooden maroon sofa',
    price: 494,
    category: 'Household',
    image: 'assets/img/gallery/product-details8.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'eight',
    title: 'Fluffy wooden maroon sofa',
    price: 494,
    category: 'Household',
    image: 'assets/img/gallery/product-details8.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  }
];

productssecond = [
  {
    id: 'fifth',
    title: 'Fluffy wooden maroon sofa',
    price: 356,
    category: 'Household',
    image: 'assets/img/gallery/product-details5.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'third',
    image: 'assets/img/gallery/product-details3.png',
    title: 'Brown foam stuffed sofa',
    price: 258,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
                 fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                 of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                 left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                  an insurance office. After moving to London and then Hampton, she eventually married her next door
                  neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                   1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                    Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                     that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                      birthday and it was with this that she produced her first significant work, a half-length portrait of
                     a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                      Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                      this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                       of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                       reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                       all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                        for one person creating less`
  },
  {
    id: 'seven',
    title: 'Fluffy wooden maroon sofa',
    price: 444,
    category: 'Household',
    image: 'assets/img/gallery/product-details7.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'fourth',
    title: 'Fluffy wooden maroon sofa',
    price: 180,
    category: 'Household',
    image: 'assets/img/gallery/product-details4.png',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  }
];

productssecondSliced = [
  {
    id: 'fifth',
    title: 'Fluffy wooden maroon sofa',
    price: 356,
    category: 'Household',
    image: 'assets/img/gallery/product-details5.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'third',
    image: 'assets/img/gallery/product-details3.png',
    title: 'Brown foam stuffed sofa',
    price: 258,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
                 fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                 of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                 left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                  an insurance office. After moving to London and then Hampton, she eventually married her next door
                  neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                   1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                    Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                     that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                      birthday and it was with this that she produced her first significant work, a half-length portrait of
                     a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                      Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                      this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                       of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                       reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                       all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                        for one person creating less`
  },
  {
    id: 'seven',
    title: 'Fluffy wooden maroon sofa',
    price: 444,
    category: 'Household',
    image: 'assets/img/gallery/product-details7.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  }
];

productstoppics = [
  {
    id: 'fifth',
    title: 'Fluffy wooden maroon sofa',
    price: 356,
    category: 'Household',
    image: 'assets/img/gallery/product-details5.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  },
  {
    id: 'third',
    image: 'assets/img/gallery/product-details3.png',
    title: 'Brown foam stuffed sofa',
    price: 258,
    category: 'Household',
    availability: 'In Stock',
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`,
                 fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                 of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                 left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                  an insurance office. After moving to London and then Hampton, she eventually married her next door
                  neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                   1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                    Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                     that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                      birthday and it was with this that she produced her first significant work, a half-length portrait of
                     a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                      Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                      this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                       of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                       reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                       all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                        for one person creating less`
  },
  {
    id: 'seven',
    title: 'Fluffy wooden maroon sofa',
    price: 449,
    category: 'Household',
    image: 'assets/img/gallery/product-details6.jpeg',
    availability: 'In Stock',
    fulldescription: `Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women
                      of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually
                      left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into
                       an insurance office. After moving to London and then Hampton, she eventually married her next door
                       neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in
                        1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
                         Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided
                          that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her
                           birthday and it was with this that she produced her first significant work, a half-length portrait of
                          a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by
                           Beryl’s husband and It is often frustrating to attempt to plan meals that are designed for one. Despite
                           this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act
                            of cooking for one. Divorce and the death of spouses or grown children leaving for college are all
                            reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust
                            all the cooking practices utilized before into a streamlined plan of cooking that is more efficient
                             for one person creating less`,
    description: `Mill Oil is an innovative oil filled radiator with the most modern technology.
                 If you are looking for something that can make your interior look awesome, and at the same time.`
  }
];

walmartItems = [
  {
  title: 'Product TitleQueer Eye Farnsworth 6 Drawer Mid-Century Modern Dresser, Walnut',
  id:'firstwalmart',
  fulldescription: `Clear up closet clutter by using the mid-century modern Queer Eye Farnsworth 6 Drawer Dresser
  Made of laminated MDF and particleboard, the classic walnut woodgrain finish gives the look of real wood for a gorgeous statement piece
  The 6 drawers can organize your folded clothing and extra sheets and feature durable metal slides. The linen look paper on each drawer
   will prevent clothes from snagging on raw edges`,
   description:  `Clear up closet clutter by using the mid-century modern Queer Eye Farnsworth 6 Drawer Dresser
   Made of laminated MDF and particleboard, the classic walnut woodgrain finish gives the look of real wood for a gorgeous statement piece
   The 6 drawers can organize your folded clothing and extra sheets and feature durable metal slides. The linen look paper on each drawer
    will prevent clothes from snagging on raw edges`,
    qty: 0,
    price: 280,
    category: 'Household',
    image: 'assets/img/firstwalmart.png',
    availability: 'In Stock',

},
{
  title: 'Bowery Hill Computer Desk in Chalked Chestnut',
  id:'secondwalmart',
  fulldescription: `Chalked ChestnutFlip-down molding reveals slide-out keyboard/mouse shelf with metal runners and safety
   stopsTwo drawers with metal runners and safety stopsLower drawer holds letter or European size hanging filesStorage
    area behind door holds vertical CPU tower and has an adjustable shelfSolid wood accentsSpecifications:Overall Product
     Dimensions: 29" H x 59.1" W x 23.5" DProduct Weight: 133 lbs`,
   description:  `Chalked ChestnutFlip-down molding reveals slide-out keyboard/mouse shelf with metal runners and safety
   stopsTwo drawers with metal runners and safety stopsLower drawer holds letter or European size hanging filesStorage
    area behind door holds vertical CPU tower and has an adjustable shelfSolid wood accentsSpecifications:Overall Product
     Dimensions: 29" H x 59.1" W x 23.5" DProduct Weight: 133 lbs`,
    qty: 0,
    price: 260,
    category: 'Household',
    image: 'assets/img/secondwalmart.jpeg',
    availability: 'In Stock',

},
{
  title: 'Dorel Living Kaci Reversible Sectional, Living Room Couch, Gray Linen',
  id:'thirdwalmart',
  fulldescription: `Classic lines and a contemporary design make the Dorel Living Kaci Sectional is a timeless piece for
  living rooms and seating areas of any style. This small space living couch is the perfect blend of form and function
   with its ergonomic seating and generous padding. The sinuous spring foundation and pocket coil seat cushions combine
    to offer the comfort you are looking for without compromising on style. What’s more, the chaise is reversible and can
     be placed on either side for your convenience. Upholstered in a soft linen fabric that is easy to maintain, the Dorel
      Living Kaci Sectional sofa achieves a clean and simple silhouette and will work well with any home decor. Part of the
       Kaci collection, the Dorel Living Kaci Sectional will compliment your home with comfort and style. Pair with the rest
        of the collection to achieve the complete living room set (sold separately). `,
   description:  `Classic lines and a contemporary design make the Dorel Living Kaci Sectional is a timeless piece for
   living rooms and seating areas of any style. This small space living couch is the perfect blend of form and function
    with its ergonomic seating and generous padding. The sinuous spring foundation and pocket coil seat cushions combine
     to offer the comfort you are looking for without compromising on style. What’s more, the chaise is reversible and can
      be placed on either side for your convenience.`,
    qty: 0,
    price: 449,
    category: 'Household',
    image: 'assets/img/thirdwalmart.jpeg',
    availability: 'In Stock',

},
{
  title: 'Santiago Riveted Plank Grey Wash Queen Size Bed by River Street Designs',
  id:'fourthwalmart',
  fulldescription: `Add an industrial pop into any bedroom with this 55” rustic queen-size bed. Create an industrial
   edge in your room or your guest bedroom thanks to the weathered plank wood appearance bordered by the historic style
    stud metal detail that’s featured on both the headboard and the footboard. With this ranch-style mix of materials and
     masculine design, you’ll be impressed at the character this bed introduces into your space. This bed frame includes
     support rails so it can easily prop up your bedding of choice. The hacienda style of this queen-size bed will make a great statement
    in your home whether you actually live on a ranch or a studio apartment in the big city`,
   description:  `Add an industrial pop into any bedroom with this 55” rustic queen-size bed. Create an industrial
   edge in your room or your guest bedroom thanks to the weathered plank wood appearance bordered by the historic style
    stud metal detail that’s featured on both the headboard and the footboard.`,
    qty: 0,
    price: 356,
    category: 'Household',
    image: 'assets/img/fourthwalmart.jpeg',
    availability: 'In Stock',

},
{
  title: `Duhome Vanity Make-up Accent Chairs Jumbo Size Luxury PU Leather Contemporary Round Swivel Computer Tufted Adjustable
   Lounge White`,
  id:'fifthwalmart',
  fulldescription: `Vanity stools and vanity chairs can be purchased in a set with a vanity table or separately. Consider whether
   you want a backless stool or vanity bench or a chair with a back for added comfort and support.
  At Walmart, you'll find a wide variety of vanities and vanity stools in styles ranging from Victorian to contemporary, all
   at Every Day Low Prices. Don't forget to check out our other bedroom furniture as well. Save money. Live better.`,
   description:  `Vanity stools and vanity chairs can be purchased in a set with a vanity table or separately. Consider whether
   you want a backless stool or vanity bench or a chair with a back for added comfort and support.`,
    qty: 0,
    price: 99,
    category: 'Household',
    image: 'assets/img/fifthwalmart.jpeg',
    availability: 'In Stock',

}
]

targetItems = [
  {
  title: 'Ventura 4pc Glider Chair Seating Set - Hanover',
  id:'firsttarget',
  fulldescription: `Create an inviting space for comfortable conversation with the Ventura 4-Piece Patio Set. One deep-seating loveseat, two
   matching armchairs, four coordinating accent pillows and a rectangular coffee table are all included in this set. Each piece is designed
    with clean lines and hand-woven construction to enhance the appeal of your outdoor environment.
    The frames are built with durable steel and aluminum construction that are naturally rust-resistant.`,
   description:  `Create an inviting space for comfortable conversation with the Ventura 4-Piece Patio Set. One deep-seating loveseat, two
   matching armchairs, four coordinating accent pillows and a rectangular coffee table are all included in this set. Each piece is designed
    with clean lines and hand-woven construction to enhance the appeal of your outdoor environment.
    The frames are built with durable steel and aluminum construction that are naturally rust-resistant`,
    qty: 0,
    price: 1149,
    category: 'Household',
    image: 'assets/img/firsttarget.webp',
    availability: 'In Stock',

},
{
  title: 'Malibu Wood Outdoor Patio 3pc Chaise Lounge Set',
  id:'secondtarget',
  fulldescription: `Create a relaxing outdoor oasis with this 3-Piece Malibu Wood Patio Chaise Lounge Set from Vifah. 
  This chaise lounge set is crafted from weather-resistant eucalyptus to withstand the elements, and it includes a side
   table and two lounge chairs to offer a relaxing place to unwind. With slatted backrests and contoured seats for extra comfort,
    this chaise lounge set is sure to add distinctive visual appeal to any environment. Place this wooden chaise lounge set
     in your yard, on your patio or poolside to relax in style.`,
   description:  `Create a relaxing outdoor oasis with this 3-Piece Malibu Wood Patio Chaise Lounge Set from Vifah. 
   This chaise lounge set is crafted from weather-resistant eucalyptus to withstand the elements, and it includes a side
    table and two lounge chairs to offer a relaxing place to unwind.`,
    qty: 0,
    price: 164,
    category: 'Household',
    image: 'assets/img/secondtarget.webp',
    availability: 'In Stock',

},
{
  title: '52" Contemporary Corner Fit TV Stand - Saracina Home',
  id:'thirdtarget',
  fulldescription: `Make the best of any corner space with Saracina Home’s Contemporary Corner Fit 52” TV Stand. Chic, tempered glass shelves are available to hold all your best home decor, whether it’s media components or cute houseplants. A combo of closed and open storage gives you privacy as well as the opportunity to show off your favorite display goodies. Even try out this TV stand as a kitchen buffet or office sideboard! `,
   description:  `Make the best of any corner space with Saracina Home’s Contemporary Corner Fit 52” TV Stand. Chic, tempered glass shelves are available to hold all your best home decor, whether it’s media components or cute houseplants.`,
    qty: 0,
    price: 215,
    category: 'Household',
    image: 'assets/img/thirdtarget.webp',
    availability: 'In Stock',

},
{
  title: 'Taylor Accent Chair with Brass Golden Legs Velvet Black - CosmoLiving by Cosmopolitan',
  id:'fourthwalmart',
  fulldescription: `Accessorize your home with the fashion-forward CosmoLiving Taylor Accent Chair. This killer piece is guaranteed to absolutely slay in your home. Designed with a stunning fabric, the Taylor features an open rounded back—these modern details totally enhance its already luxurious look. The Taylor accent chair also has metal feet and is plushed with a padded back and seat. She is just as comfortable as she is fierce! `,
   description:  `Accessorize your home with the fashion-forward CosmoLiving Taylor Accent Chair. This killer piece is guaranteed to absolutely slay in your home. Designed with a stunning fabric, the Taylor features an open rounded back—these modern details totally enhance its already luxurious look. The Taylor accent chair also has metal feet and is plushed with a padded back and seat. She is just as comfortable as she is fierce! `,
    qty: 0,
    price: 449,
    category: 'Household',
    image: 'assets/img/fourthtarget.webp',
    availability: 'In Stock',

},
{
  title: `Darcy Rocker Recliner Sky - Signature Design by Ashley`,
  id:'fifthtarget',
  fulldescription: `Talk about fine lines and great curves. That’s the beauty of the Darcy rocker recliner—made to suit your appreciation for clean, contemporary style. Comfy pillow top armrests, refined stitching and ultra-soft upholstery complete this fashion statement.`,
   description:  `Talk about fine lines and great curves. That’s the beauty of the Darcy rocker recliner—made to suit your appreciation for clean, contemporary style. Comfy pillow top armrests, refined stitching and ultra-soft upholstery complete this fashion statement.`,
    qty: 0,
    price: 395,
    category: 'Household',
    image: 'assets/img/fifthtarget.webp',
    availability: 'In Stock',

}
]

homeDepotItems = [
  {
  title: 'Crown Ivory Linen Dining Chair (Set of 2)',
  id:'firsthome',
  fulldescription: `Update your dining room with these exquisite, upholstered dining chairs. With a tufted seat back and crown-shaped top, these are perfect for every manner of occasion: formal enough for a serious dinner, but relaxed enough for casual, daily use. Their neutral tones will complement almost any room, allowing you diverse options for table setting and wall decoration.`,
   description:  `Update your dining room with these exquisite, upholstered dining chairs. With a tufted seat back and crown-shaped top, these are perfect for every manner of occasion: formal enough for a serious dinner, but relaxed enough for casual, daily use. Their neutral tones will complement almost any room, allowing you diverse options for table setting and wall decoration.`,
    qty: 0,
    price: 183,
    category: 'Household',
    image: 'assets/img/firsthome.jpg',
    availability: 'In Stock',

},
{
  title: 'Brent Dark Cherry and Ivory Transitional Style Dining Table',
  id:'secondhome',
  fulldescription: `Create a sleek and appealing dining space by adding one of the many variations of this collection to your space. Bring elegance to the table with this fine collection of furniture. This exquisite dining table is the perfect gathering place for home-cooked meals or small gatherings with friends.`,
   description:  `Create a sleek and appealing dining space by adding one of the many variations of this collection to your space. Bring elegance to the table with this fine collection of furniture. This exquisite dining table is the perfect gathering place for home-cooked meals or small gatherings with friends.`,
    qty: 0,
    price: 272,
    category: 'Household',
    image: 'assets/img/secondhome.jpg',
    availability: 'In Stock',

},
{
  title: 'Millwright Black Extendable Dining Table',
  id:'thirdhome',
  fulldescription: `Create a modern style element in your kitchen or dining room with our modern farmhouse dining table. The table can comfortably fit six people around with an easy to use butterfly leaf feature giving you extra table space for when guests come over. Subtle wormhole distressing details appear on the wood veneer surface for a worn-in and timeless traditional look.`,
   description:  `Create a modern style element in your kitchen or dining room with our modern farmhouse dining table. The table can comfortably fit six people around with an easy to use butterfly leaf feature giving you extra table space for when guests come over. Subtle wormhole distressing details appear on the wood veneer surface for a worn-in and timeless traditional look.`,
    qty: 0,
    price: 590,
    category: 'Household',
    image: 'assets/img/thirdhome.jpg',
    availability: 'In Stock',

},
{
  title: 'Black Rectangular Dining Table with Metal Legs',
  id:'fourthhome',
  fulldescription: `Constructed with a simple yet stylish appearance, this dining table has a timeless look that can easily blend into any environment and add a unique industrial style to your dining room. Table top is specially made of solid compressed bamboo wood which is very durable, heavy-duty steel construction with built-in brace for greater stability and sturdiness.`,
   description:  `Constructed with a simple yet stylish appearance, this dining table has a timeless look that can easily blend into any environment and add a unique industrial style to your dining room. Table top is specially made of solid compressed bamboo wood which is very durable, heavy-duty steel construction with built-in brace for greater stability and sturdiness. `,
    qty: 0,
    price: 299,
    category: 'Household',
    image: 'assets/img/fourthhome.jpg',
    availability: 'In Stock',

},
{
  title: `47.25 in. Sonoma Pub Table with 1-Bench and 2-Stools in Driftwood Gray`,
  id:'fifthhome',
  fulldescription: `Rugged charm comes naturally to the Sonoma Pub Set. Add a saddle-style rustic vibe to your dining space. Whether you’re feeling sociable or need to fill your belly, this ensemble offers a comfortable place to gather. Now available in our new chestnut wire-brush finish. This set includes a pub table, bench, and two saddle-stools`,
   description:  `Rugged charm comes naturally to the Sonoma Pub Set. Add a saddle-style rustic vibe to your dining space. Whether you’re feeling sociable or need to fill your belly, this ensemble offers a comfortable place to gather. Now available in our new chestnut wire-brush finish. This set includes a pub table, bench, and two saddle-stools`,
    qty: 0,
    price: 302,
    category: 'Household',
    image: 'assets/img/fifthhome.jpg',
    availability: 'In Stock',

}
]

realproducts = [];

prodSubj = new BehaviorSubject<any>(null);
openModalsubj = new Subject<any>();
addproductsubj = new Subject();
closemodalSubj = new Subject();
cartcount = 0;
selectedProduct = null;
cartItems = [];
}

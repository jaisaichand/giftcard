import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
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

prodSubj = new BehaviorSubject<any>(null);
openModalsubj = new Subject<any>();
addproductsubj = new Subject();
closemodalSubj = new Subject();
cartcount = 0;
selectedProduct = null;
cartItems = [];
}

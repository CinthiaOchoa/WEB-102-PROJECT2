# Web Development Project 2 - *Where in the World is this City?*

Submitted by: **Cinthia Ochoa Torre**

This web app: **is an interactive flashcard guessing game that helps users learn about beautiful and famous cities around the world. Users are shown a flashcard with a country and image, and they must guess what city it is. Flipping the card reveals the answer, and a "Next" button allows users to move on to another random city.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - [x] Colors and layout designed to match a fun learning aesthetic

The following **additional** features are implemented:

* [x] Intro/start card that invites users to start the game
* [x] Reset the card to front side when switching to a new one
* [x] Flashcard shows the country and image first, then flips to reveal the city
* [x] Flashcards are centered and fully responsive
* [x] All layout and styles fully customized using `App.css` and `Flashcard.css`

## Video Walkthrough

Here's a walkthrough of implemented required features:
[Watch Video Walkthrough](https://imgur.com/a/a7CrSbT.gif)



## Notes

Some of the main challenges were:
- Getting the card to properly flip back to the front after changing to a new card
- Styling and aligning elements to be mobile-friendly and visually centered
- Making sure the card flip animation didn’t glitch with conditional rendering
- Creating a smooth user experience when showing image + country first, and then city

## License

    Copyright 2025 Cinthia Ochoa

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

# Web Development Project 3 - Where in the World is This City?

Submitted by: Cinthia Ochoa Torre

This web app: An interactive flashcard game where users guess the city based on the country and an image shown. Users enter their guess before flipping the card, get immediate feedback, navigate through cards, and track their progress with streaks. Cards can be marked as mastered and shuffled for randomized play.

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons have a disabled/grayed out state when at the beginning or end of the list, preventing wrap-around navigation

## Optional Features Implemented

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards remain in the original order unless shuffle is clicked
  - Shuffle randomizes the card sequence
- [x] A user’s answer is counted as correct even when it is slightly different from the target answer
  - Matching ignores case, punctuation, and accepts partial matches (e.g., "sao" for "São Paulo")
- [x] A counter displays the user’s current and longest streak of correct responses
  - Current streak increments on correct guesses and resets on incorrect guesses
  - Longest streak updates if current streak exceeds previous record
- [x] Users can mark a card as mastered, removing it from the active deck and adding it to a mastered list

## Additional Features Implemented

- [x] Starting card introducing the game with a start button
- [x] Display of the country’s name and an image before guessing the city
- [x] Responsive and centered layout with styled buttons and card flip animations
- [x] Visual feedback colored text for correct/incorrect answers

## Video Walkthrough

Here's a walkthrough of implemented required features:
[Video Walkthrough](https://imgur.com/a/tzsimwE.gif)


## Notes

Challenges included implementing fuzzy matching for user input and synchronizing card flip state with guess submission and navigation buttons. Styling the flip animation and ensuring responsive layout were also key focus areas.

## License

    Copyright 2025 Cinthia Ochoa Torre

    Licensed under the Apache License, Version 2.0 (the \"License\");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an \"AS IS\" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.






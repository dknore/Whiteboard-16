# Whiteboard-16:  Theater Seating - Count People Shorter

Directions:<br>
Write a <b>primary function</b> called `theaterSeating()` that:
- Accepts a 2D array of seats, and people’s heights as arguments
  - People’s heights are written as "72 inches" or "5 feet 2 inches"
  - you’re given one persons seat coordinate (row, col)
- Returns how many people they are blocking 
  - Consider blocking to be anyone shorter sitting behind them
  - Ignore other tall people behind them
  - Index zero represents the front of the theater
  - Access seats like seats[row][col]
- Returns the total value of all the nodes in the tree
- Returns 0 if the tree is empty.

Write a <b>helper function</b> called convertInches() that:
- Handles peoples height


**Dealing with empty seats:<br>
You may choose to assume <b>any</b> of the following about empty seats in the theater:

- assume the theater is always full
- assume empty seats are filled with null
- assume empty seats are filled with undefined
- assume empty seats are filled with the string "empty"

```
Example of Array:
let SEATS = [
  [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
  [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
  [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
  [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
  [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
  [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
  [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ]
]
```

<u>Whiteboard</u>:<br>

![alt text](./images/401.whiteboard-16.jpg)

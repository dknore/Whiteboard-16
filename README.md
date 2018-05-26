# Whiteboard-16:  Theater Seating - Count People Shorter

Directions:<br>
Write a primary function called `theaterSeating()` that:
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

Dealing with empty seats:<br>
You may choose to assume <b>any</b> of the following about empty seats in the theater:

- assume the theater is always full
- assume empty seats are filled with null
- assume empty seats are filled with undefined
- assume empty seats are filled with the string "empty"

<u>Whiteboard</u>:<br>

![alt text](./images/401.whiteboard-16.jpg)

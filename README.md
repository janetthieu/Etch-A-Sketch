# Etch-A-Sketch

![Etch-A-Sketch on Desktop](/styles/desktop.png)

A slightly different take on the classic Etch-A-Sketch! [Create your own masterpiece](https://janetthieu.github.io/Etch-A-Sketch/) by hovering over your desired cells. You have the option to keep the original color, choose randomly selected colors, or even change the grid size to be smaller or larger. Have fun with it!

## The Making of Etch-A-Sketch
The main goal of creating Etch-A-Sketch was to create the cells using JavaScript, instead of HTML. Thus, leading to many lessons learned in regards to accessing and changing properties (e.g., background color) of those cells and more.

## Most Memorable Challenge
Out of all of the challenges I came across during the making of this project, deciding whether to use a switch or if-else statement became the most memorable. The challenge was to figure out the statement best suited for selecting a color and reseting the board. At the time, I knew both, switch and if-else, statements had similar functionality, but now it was time for me to get to know them a little better.

## Solution
For this particular use case, I was looking for a statement that would only need to test for the different color choice buttons or reset button being selected. I could use either the switch or if-else statement and get approximately the same result performance-wise. Since the case constants were all the same type, I felt a switch statement would be better for the long run. This would provide easy readability and would be more optimal for future patches.

A switch statement would make it easy to add additional color choice options. Once the number of cases exceeds 5, it uses a lookup table or hash list; giving all cases the same access time. Whereas, an if-else statement, would need to evaluate the previous condition first, leading to decreasing performance as more cases are added. The switch statement then becomes the obvious choice.

## Acknowledgments

This project was made as part of my journey through [The Odin Project](https://www.theodinproject.com/).

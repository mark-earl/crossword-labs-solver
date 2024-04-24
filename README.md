This hack solves crosswords at [Crossword Labs](https://crosswordlabs.com/)

1) Open your crossword in your browser, like this [example](https://crosswordlabs.com/view/country-133)
2) Open the developer tools (usually F12)
3) Navigate to the "console"
4) Paste and run the following in: (you may need to allow pasting)
 ```js
 for(i=0;i<grid.length;i++)for(j=0;j<grid[i].length;j++)grid[i][j]&&$("#cx-"+i+"-"+j).find(".cx-a").text(grid[i][j].char);
 ```

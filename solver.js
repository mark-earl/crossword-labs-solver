f=(r,c)=>'#cx-${r}-${c}';
s=(r,c,ch)=>$(f(r,c)).find(".cx-a").text(ch);
for(i=0;i<grid.length;i++)
  for(z=0;z<grid[i].length;z++)
    grid[i][z]&&s(i,z,grid[i][z].char);

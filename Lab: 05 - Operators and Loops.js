
var order = prompt("What do you think about Mansaf? like it, did not like");
var b =("<h1> We will try to change your mind </h1>")

while(order != 'like it'  && order != 'did not like' )

{
    order = prompt("What do you think about Mansaf? like it, did not like");
}
var itemorder = '';

if(order == 'like it')
{
itemorder = '<img src="https://www.ashefaa.com/upload/food/ashefaa1560328758304.jpg">';
}
else
{
itemorder = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Pk3cCZtNzkWOP2Dn-chxLwggJTp2k3ROiQ&usqp=CAU">';
}

var numoffrinds = prompt("How many friends you have at the diner");

var result=" ";

for(var x=0;x<numoffrinds;x++)
{ 
    result= result +itemorder; 
}

document.write(result);



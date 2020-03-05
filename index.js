let name = prompt()

let slice1 =prompt()
let slice2 =prompt()


if(isNAN(slice1) == true || isNAN(slice2) == true)
{
  alert('not a number')
}
else{
  alert(name.slice(slice1,slice2))
}



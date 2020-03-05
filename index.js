//primitive datatypes : string,booleaan,number
//reference datatypes : object(arrrays)
//special values : null(object type),NAN,undefined


//string methods

let a = 'value';
console.log(a.length)
//it returns the number of characters in the string A
//output: 5

console.log(a.concat("string"))
//It is used to concat two strings str1,str2
//str1.concat(str2)
//output: valuestring

console.log(a.endsWith('e'))
//It is used to check the final or any numbers of final characters
//output: true

console.log(a.includes('ue'))
//It is used to check weather the given characters in the includes is 
//presrnt in the orginal string or not
//output: true

console.log(a.indexOf('a'))
//It returns the index of the given character
//output: 1

console.log(a.lastIndexOf('l'))
//it returns the last occurence of the character or word
//output: 2

console.log(a.repeat(3))
//it repeats the sring number of times
//output: valuevaluevalue

console.log(a.replace('ue' ,'hello'))
console.log(a.replace(/l/g,'i'))
//it replaces the specified string with given string
//output: valhello

console.log(a.search('u'))
//it returns the index of the given character
//output: 3

console.log(a.slice(-2,4))
//it returns the characters starting from index 2 and before index 4
//output: lu

console.log(a.split(""))
//it splits the character one by one
//output: v,a,l,u,e
console.log(a.split('l'))
//it splits the character word by word
//output: value

console.log(a.startsWith('v'))
//it is used to check the starting character
//output: true

console.log(a.substr(-2,4))
//it returns the substring between the indexes till 4
//output: lue

console.log(a.substring(2,4))
//it returns substring between the indexes before 4
//output: lu

console.log(a.toUpperCase())
//It returns uppercase of word
//output: VALUE

console.log(a.toLowerCase())
//output: value

console.log(a.trim())
//it removes extra spaces from both the sides


//------------------------------------------------------------------------

//number methods

let  b = 2020.2090
console.log(b.toFixed(2))
//It is used to fix the number of decimal digits
//output: 2020.20

console.log(b.toExponential(2))
//It converts the number to exponential from
//output: 2.02e+3

b = b.toString()
console.log(b+' '+typeof b)
console.log(`${b} ${typeof b}`)
//It is used to change the number type to string

//------------------------------------------------------------------------

//global methods

console.info(a)
//displays the info of the variable
//output: value

console.log(b)
//displays the value in console
//output: 2020.209

console.warn(a)
//displays a warning message
//output: value(in yellow color)

console.error(a)
//output: value(in red color)

console.table('a','b')
//It displays the data in table format
//output: a b

//alert('alert message')
//displays a alert message

//let x = prompt(a)
//displays a textbox in the prompt

//let y = confirm(a)
//It is used to confirm a action that is done

console.log(parseInt(b))
//It parse the value to integer
//output: 2020

console.log(Boolean(a))
//It displays true if it has not null parameter
//output:true

let num = '999.666'
console.log(Number(num))
//It accepts a numbered string or boolean true or false and convert it to number
//output: 999.666

let c = '2020 onwards  2020'
console.log(parseFloat(c))
console.log(parseFloat(b))
//It parses the number from the string and display the value
//It also parses the float value
//output: 2029

console.log(isNaN(b))
//It checks whether the given parameter is number or not
//output: false


//------------------------------------------------------------------------






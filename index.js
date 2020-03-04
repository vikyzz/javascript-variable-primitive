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



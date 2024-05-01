//
//function concatStrings(str1, str2) {
//return str1.trim() + '' + str2.trim();
//}
//function saySomething2(msg = 'Hello World!') {
//  const prefix = 'My function says: '
//  const result = concatStrings(prefix, msg)
//  console.log(result)
//}
//saySomething2()
//ARROW FUNCTION - MDN (pentru documentare referitor la acesta functie)
//const saySomething = (a) => {
//  console.log('Hello World!')
//}
//saySomething()


//Functie in functie
const krissSaysSomething = (msg ='Hello World') => {
    return 'Kriss says: ' + msg;
}


console.log(krissSaysSomething('Hello World!'))
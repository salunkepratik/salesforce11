public class reverse{
 public static void main(String arg[] ){
function reverseString(str) {
    // empty string......
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);
  }
}

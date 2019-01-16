/*
Problem:
Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.

Problem Source: Exercism.io
*/

class RaindropConverter {

    public static void main(String args[]) {
        convert(1); 
        convert(3);
        convert(5); 
        convert(7); 
        convert(105);  
    }

    public static String convert(int number) {
        String str = "";
        if (number % 3 == 0) {
            str += "Pling";
        }
        if (number % 5 == 0) {
            str += "Plang";
        }
        if (number % 7 == 0) {
            str += "Plong";
        }
        if (str == "") {
            str += number;
        }

        System.out.println(str);

        return str;
    }

}



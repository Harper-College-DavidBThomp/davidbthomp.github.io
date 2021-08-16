/*
* ReadDouble Assignment
* Take User Input as a String and read input into valid number
*
* First charcter can be +, -, or decimal
* rest of char can be numeric, comma, or decimal
* commas must be in proper location, before decimal, and seperating 3 digit groups  
* no commas after decimal point
* only one decimal point
*/

#include <iostream>
#include <string>
#include <climits>
#include <cstdlib>
#include <cctype>

using namespace std;


void ReadChar(string &input) {

    string convert;
    string commas;
    bool isValid=true;
    long len=input.length();

    long periodIndex = input.find(".");
    periodIndex = periodIndex + 1;

    do {
        // Check that first input value is + - 0
        if (input[0]!='+' && input[0]!='-' && isdigit(input[0]) == 0) {
            std::cout << "Error! First digit input is not \"-\", \"+\", or \"0\".\n\n";
            isValid=false;
        } else {
            // captures first charcter (+, -, 0)
            convert=input.substr(0,1);
        }

        // check that the remaining characters are numeric
        for (long index=1; index < len; index++) {
            if (input[index]==',' || input[index]=='.') {
                ; // Do nothing
            }
            else if (isdigit(input[index]) == 0){
                //if the value is not a number
                cout << "Error! Input was not an integer.\n\n";
                isValid=false;
            }
            else {
                // adds first string back to validated input
                convert += input.substr(index,1);
            }
        }

        // Check all points after period
        string decimalEnd;
        decimalEnd += ".";
        for (periodIndex; periodIndex < len; periodIndex++) {
            if (input[periodIndex]==',' || input[periodIndex]=='.') {
                //if values after period are period or comma
                cout << "\n" <<"Error! Only one period is valid, and no periods or commas can come after initial period.\n\n";
                isValid=false;
            }

            decimalEnd += input[periodIndex];

        }


        // Adds Commas before period where needed
        long commaDec = input.find(".");
        commaDec = commaDec;
        commas = input.substr(0,commaDec);
        long commasLen=commas.length();

        long n = commasLen - 3;
        while (n > 0) {
            commas.insert(n, ",");
            n-=3;
        }  
        

        commas += decimalEnd;
        
        if (isValid==true) {
            cout  << "The string input was " << commas << "\n\n";
            isValid=false;
        } else {
            isValid=false;
        }
    } while (isValid=false);

}


int main()
{
    // Get user input
    string input;
	cout << ("Enter a value: ");
    getline(cin,input);

    ReadChar(input);

	return 0;
}

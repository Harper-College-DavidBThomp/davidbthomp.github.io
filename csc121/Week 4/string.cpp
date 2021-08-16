/* 
 * Takes string and outputs indivdual letters uppercase\
*/

#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main()
{
	// variables
	string input;

	// input
	cout << "Enter word to be output as uppercase indivdual letters:";
	getline(cin,input);

	// processing
    long index = 0;
    
    while (index < input.length()) {
        char output = toupper(input[index]);
        cout << output << endl;
        index++;
    }

	// output
    cout << "The word input was " << input << endl;
	return 0;
}
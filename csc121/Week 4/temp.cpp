/*
* Converts C to F
*/

#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// variables
	double cel=0.0, far=0.0;

	// input
	cout << "Enter degrees in Celsius:";
	cin >> cel;

	// processing
    far = (cel*9.0/5.0) + 32.0;


	// output
	cout << "The temperature in farenheit is " << far << "°F\n";
	return 0;
}

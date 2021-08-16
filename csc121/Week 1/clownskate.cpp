/*
* Yikes the clown skate Assignment
* Takes input of height of hill and height of ramp to calculate velocity
*/

#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// variables
	double hill=0.0, ramp=0.0;

	// input
	cout << "Yikers the clown is skating downa hill, help his launch speed!\n";
	cout << "Enter the height of hill in meters and the height of the ramp in meters to find out:";
	cin >> hill >> ramp;

	// processing
	double heightMaths=hill-ramp;
	double gravity=2.0 * 9.8;
	double velocity=sqrt(gravity*heightMaths);


	// output
	cout << "Yikes will be going " << velocity << " meters per second at the end of the ramp.\n";
	return 0;

}

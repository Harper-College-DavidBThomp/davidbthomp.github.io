/* 
 * Converts polar cords to cartesian
*/

#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// variables
	double x=0.0, y=0.0, radius=0.0, angle=0.0;

	// input
	cout << "Input radius and angle (degrees):";
	cin >> radius >> angle;

	// processing
	double radians=angle*M_PI/180.0;
	x=radius * cos(radians);
	y=radius * sin(radians);

	cout << "Cartesian: (" << x << "," << y <<")\n";
	return 0;
}
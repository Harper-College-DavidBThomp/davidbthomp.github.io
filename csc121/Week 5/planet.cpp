/*
* Create a program that uses a class to store information on a planet, as well as calculate additional information.  Your program will need to use a class that must store at a minimum:
* The planets name
* Mass
* Diameter
* A member function that will calculate the surface area
* A member function that will calculate the density of the planet (mass / volume)
* A member function that will calculate the acceleration due to gravity at the planets surface
* Assume that planets are spheres.
* All members (name,mass,diameter) must be private, with get and set functions for each.  Remember to enforce the constraint that the mass and diameter must be > 0.  Your class may optionally have an input and display function.  
* Write a program that will prompt the user for the members of the class and will redisplay the name, mass, diameter as well as the surface area, density and acceleration due to gravity.
*/

#include <iostream>
#include <cmath>
#include <climits>
#include <string>

using namespace std;

class planet {
    private:
        string planetName;
        double planetMass, planetDiameter;
    public:
        // Set variables
		bool setMass(double x);
        bool setDiameter(double y);
        bool setName(string name);

        // Get variables
		double getMass();
        double getDiameter();
        string getName();

        // Calculations and objects for output
        double planetSurfaceArea();
		double planetVolume();
        double planetDensity();
        double planetAcceleration();
};

bool planet::setMass(double x) {
    bool rv=false;
	planetMass=x;
	rv=true;
	return rv;
}

bool planet::setDiameter(double y) {
    bool rv=false;
	planetDiameter=y;
	rv=true;
	return rv;
}

bool planet::setName(string name) {
    bool rv=false;
	planetName=name;
	rv=true;
	return rv;
}

double planet::getMass() {
	return planetMass;
}

double planet::getDiameter() {
	return planetDiameter;
}

string planet::getName() {
	return planetName;
}

double planet::planetSurfaceArea() {
	return 4.0*M_PI*pow((planetDiameter/2.0), 2.0);
}

double planet::planetVolume() {
	return (4.0/3.0)*M_PI*pow((planetDiameter/2.0), 3.0);
}

double planet::planetDensity() {
	return (planetMass/planetVolume());
}

double planet::planetAcceleration() {
	return (6.67408*pow(10.0,-11.0)*planetMass/pow((planetDiameter/2.0), 2.0));
}

void input(planet& planetInfo);
void failInput();

int main() {

    bool runAgain = false;

    do {
        try {
            planet planetInfo;
            input(planetInfo);

            cout << "Name: " << planetInfo.getName() << "\nMass: " << planetInfo.getMass() << " KGs\nDiameter: " << planetInfo.getDiameter() << "meters\nSurface Area: " << planetInfo.planetSurfaceArea() << "meters squared\nVolume: " << planetInfo.planetVolume() << "KGs\nDensity: " << planetInfo.planetDensity() << "\nGravity Acceleration: " << planetInfo.planetAcceleration() << " m/s" << endl;
        }  catch (int e) {
            // Stores error in int e and then displays error.
            runAgain=false;
            cerr << "An exception was thrown! Error number " << e << endl;
        }

        // Ask user to run program again
        string userAgain;
        cout << "Would you like to run the program again?\n (Y)es or (N)o: ";
        cin >> userAgain;
        if (userAgain == "Y" || userAgain == "y") {
            runAgain = false;
        } else {
            runAgain = true;
        }
        
    } while (runAgain == false);

	return 0;    

}

void failInput() {
    cout << "\nError! Cannot read input. Make sure mass and diameter are greater than 0 numbers.\n";
    cin.clear();
    cin.ignore(INT_MAX,'\n');
}

// Input for cube
void input(planet& planetInfo) {
	double x, y;
    string name;

    // Need to add error checking for each input, Or combine into single input that goes line by line
    // Look at other code from teacher for example

    cout << "Planet Name:";     
    cin >> name;
    
    cout << name << "'s mass in KGs:";
    cin >> x;

    cout << name << "'s diameter in meters:";
    cin >> y;

    while (cin.fail()==1) { 
        failInput();
        // Could make user input into a function, possibly for final project to make code more DRY
        cout << "Planet Name:";     
        cin >> name;
        
        cout << name << "'s mass in KGs:";
        cin >> x;

        cout << name << "'s diameter in meters:";
        cin >> y;
    }

    while (x <= 0.0 || y <= 0.0) {
		cout << "The planets radius mass and radiusmust be greater than 0.\n" << name << "'s mass in KGs:";
		cin >> x;

        cout << name << "'s diameter in meters:";
        cin >> y;
	}

    planetInfo.setName(name);
	planetInfo.setMass(x);
    planetInfo.setDiameter(y);

}
/*
* List the planets in order
* TO DO
* Allow user to input any number greater than vector to be put in last
* Option 6
*/

#include <iostream>
#include <algorithm>
#include <cmath>
#include <climits>
#include <string>
#include <vector>
#include <ctime>
#include <cstdlib>

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

        // Vector functions
        void display();
        string findName(vector<string>& nameVector);

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

void planet::display() {
    cout << "Name: " << planetName << "     Mass: " << planetMass << " KGs     Diameter: " << planetDiameter << " meters     Surface Area: " << planetSurfaceArea() << " meters squared     Volume: " << planetVolume() << "KGs     Density: " << planetDensity() << "KGs/cubic meter      Gravity Acceleration: " << planetAcceleration() << " m/s" << endl;
}

string planet::findName(vector<string>& nameVector) {
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

int getPosition();
void failInput();

void display(vector<planet>& list);
bool insert(vector<planet>& list, planet planetInfo, bool rv);
void remove(vector<planet>& list);
void findPlanet(vector<planet>& list);

//Ordering Functions
void order(vector<planet>& list);



int main() {

    planet planetInfo;
    vector<planet> list;
    display(list);

    int menuChoice=0;

	// print menu
	cout << "1. Add Planet\n2. Delete Planet\n3. Find Planet\n4. List Planets\n5. Order Planets\n6. Quit\nEnter choice number:";
	cin >> menuChoice;

	// If menu input fails, reprint and reenter number
    while (cin.fail()==1) { 
        cout << "\nError! Cannot read input. Make sure input is a number.\n";
        cin.clear();
        cin.ignore(INT_MAX,'\n');
	    cout << "1. Add Planet\n2. Delete Planet\n3. Find Planet\n4. List Planets\n5. Order Planets\n6. Quit\nEnter choice number:";
        cin >> menuChoice;
    }


    while (menuChoice != 6) {

        // Menu choice adding planet
		if (menuChoice==1) {

            try {
                input(planetInfo);

                int listlen = list.size();

                if (listlen <= 0) {
                    list.push_back(planetInfo); 
                    cout << "Name: " << planetInfo.getName() << "\nMass: " << planetInfo.getMass() << " KGs\nDiameter: " << planetInfo.getDiameter() << " meters" << endl;
                } else {
                    bool rv;
                    rv = insert(list, planetInfo, rv);

                    if (rv == true) {
                        cout << "Name: " << planetInfo.getName() << "\nMass: " << planetInfo.getMass() << " KGs\nDiameter: " << planetInfo.getDiameter() << " meters" << endl;
                    } else {
                        cout << "\nPlease use a position that is in the list or one above the list.\n\n";
                    }
                }
            } catch (int e) {
                // Stores error in int e and then displays error.
                cerr << "An exception was thrown! Error number " << e << endl;
            }

		}

        // Menu choice for deleting planet
		if (menuChoice==2) {
            remove(list);
		}

        // Menu choice for finding planets by name
		if (menuChoice==3) {
            findPlanet(list);
		}

        // Menu choice for listing off planets
		if (menuChoice==4) {
            display(list);
		}

        // Menu choice for Sorting Planets
		if (menuChoice==5) {
            order(list);
		}

        // Invalid menu choice
		if (menuChoice != 1 && menuChoice != 2 && menuChoice != 3 && menuChoice != 4 && menuChoice != 5&& menuChoice != 6) {
			cout << "\nError! Invalid menu choice\n";
		}
        
		// print menu
		cout << "\nPlease select an option or quit program.\n1. Add Planet\n2. Delete Planet\n3. Find Planet\n4. List Planets\n5. Order Planets\n6. Quit\nEnter choice number:";
		cin >> menuChoice;
        	// If menu input fails, reprint and reenter number
        while (cin.fail()==1) { 
            cout << "\nError! Cannot read input. Make sure input is a number.\n";
            cin.clear();
            cin.ignore(INT_MAX,'\n');
            cout << "\nPlease select an option or quit program.\n1. Add Planet\n2. Delete Planet\n3. Find Planet\n4. List Planets\n5. Order Planets\n6. Quit\nEnter choice number:";
            cin >> menuChoice;
        }


	}

    // User selects quit(5) option 
	cout << "Thanks for using this program.\n";

	return 0;

}


void failInput() {
    cout << "\nError! Cannot read input. Mass and diameter must be greater than 0\n";
    cin.clear();
    cin.ignore(INT_MAX,'\n');
}

// Input for planet
void input(planet& planetInfo) {
	double x, y;
    string name;

    // Need to add error checking for each input, Or combine into single input that goes line by line
    // Look at other code from teacher for example

    cout << "\nPlanet Name:";     
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

// Display list of planets
void display(vector<planet>& list) {
    if (list.empty()==1) {
        cout << "List is empty.\n";
    }
    else {
        long len=list.size();
        for (long i=0;i<len;i++) {
            cout << i + 1 << ") ";
            list[i].display();
        }
        cout << endl;
    }
}

bool insert(vector<planet>& list, planet planetInfo, bool rv) {
    int position = getPosition();

    position = position - 1;

    rv = false;
    if (position >= 0 && position <= list.size()) {
        rv = true;
        planet end;

        // add room for the value to be stored
        list.push_back(end);

        // shift values down to make room
        for (int i = list.size()-1; i >= position ; i--) {
            list[i]=list[i-1];
        }
        list[position] = planetInfo;
    } else {
        rv = false;
    }

   return rv;
}

void remove(vector<planet>& list) {
    display(list);
    int position = getPosition();

    position = position - 1;
    if (position >= 0 and position < list.size()) {
      // shift values to left, overwriting value to be deleted
      for (int i = position; i < list.size() - 1; i++) {
         list[i]=list[i+1];
      }
      //remove last element in the list
      list.pop_back();
    }

}

int getPosition() {
    int position;
    cout << "Position in list to insert:";
    cin >> position;

    while (cin.fail()==1) { 
        failInput();
        cout << "Invalid input, please try again\nPosition in list:";     
        cin >> position;
    }

    while (position < 0.0) {
        cout << "Input must be greater than 0.\nPosition in list:";     
        cin >> position;
    }

    return position;
}

void findPlanet(vector<planet>& list) {
    // PLanet to find
    string planetFind;
    cout << "Planet name to find:";
    cin >> planetFind;

    // Vector with planets as string
    vector<string>nameVector;
    string planetName;
    long len=list.size();
    for (long i=0;i<len;i++) {
        planetName = list[i].findName(nameVector);
        nameVector.push_back(planetName);
    }

    // find index of planet to find
    int index;
    auto it = find(nameVector.begin(),nameVector.end(), planetFind);
    if (it != nameVector.end()) {
        index = it - nameVector.begin();

        // Display the list information for that planet list value
        list[index].display();

    } else {

        cout << "Planet cannot be found.\n";
        
    }
    nameVector.clear();
}

void order(vector<planet>& list) {
    long len=list.size();
    
    // Gets the names into a vector
    vector<string>nameVector;
    string planetName;
    for (long i=0;i<len;i++) {
        planetName =list[i].findName(nameVector);
        nameVector.push_back(planetName);
    }


    // Bubble Sorting
    bool done = true;
    while(done) {

        done = false;

        for	(long i=0; i<len - 1; i++) {
            // Simplified Bubble Sorting
            // Credit to http://www.cplusplus.com/forum/general/24208/
            // To sort planets by full data replace with list
            if (nameVector[i] > nameVector[i + 1]) {
                nameVector[i].swap(nameVector[i + 1]);
                iter_swap(list.begin() + i, list.begin() + i + 1);
                done = true;
            }
        }
    }
    display(list);

    nameVector.clear();
}
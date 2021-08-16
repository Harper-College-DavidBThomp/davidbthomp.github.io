/*
* Converts C to F
* Stores inputs into file, and allows for file to be read if created by user
*/

#include <iostream>
#include <cmath>
#include <string>
#include <fstream>
#include <iomanip>
#include <climits>

using namespace std;

int celToFar(string fileName);
void celToFarFile(double fileTemp);
int farToCel(string fileName);
void farToCelFile(double fileTemp);

void failInput();
void appendDelete(string fileName);
void inputFile(string fileName, double temp, char unit);

int main()
{
    int menuChoice = 0;
    double celConvert, farConvert, fileInput, fileTemp;
    char celOrFar;

	// File Opening
	string fileName;
	cout << "Please input file name you would like to work with:";
	cin >> fileName;

	while (cin.fail()==1) { 
		failInput();
		cout << "Please input file name you would like to work with:";
		cin >> fileName;
	}

    ifstream myfile(fileName);

    try{
        if (myfile.is_open()) {
            // While file is open, take inputs seperated by space
            while(myfile >> fileTemp >> celOrFar) {
                if (celOrFar == 'C' && fileTemp) {
                    celToFarFile(fileTemp);
                } else if (celOrFar == 'F' && fileTemp) {
                    farToCelFile(fileTemp);
                } else if (celOrFar != 'F' || celOrFar !='C' || !fileTemp) {
                    cout << "This line has incorrect formatted units. Please format units and try again.\n";
                }
            }
            myfile.close();
        
            // Choose if the file gets appended to or deleted
            appendDelete(fileName);

        } else {
            cout << "Unable to find file." << endl << "Please enter a file name for data:";
			cin >> fileName;

			while (cin.fail()==1) { 
				failInput();
				cout << "Unable to create file." << endl << "Please enter a file name for data:";
				cin >> fileName;
			}
			ofstream thefile(fileName);
            cout << "File created!" << endl;
        }

    } catch (int e) {
        cout << "Failure:" << e;
    }

    // Menu
    double temp;
    char unit;
    cout << "This program will convert farenheit or celsius.\n1. Celsius\n2. Farenheit\n3. Quit\nWhich would you like to convert from:";
    cin >> menuChoice;

    while (menuChoice != 3) {
        if (menuChoice == 1) {
            farConvert = celToFar(fileName);
        }

        if (menuChoice == 2) {
            celConvert = farToCel(fileName);
        }

        cout << "Please select another option or quit.\n1. Celsius\n2. Farenheit\n3. Quit\nWhich would you like to convert from:";
        cin >> menuChoice;

    }

    cout << "Thank you for using the program! Data is stored in the file for all conversions done!" << endl;

	return 0;
}

void appendDelete(string fileName) {
    char appendDelete;

    cout << "Would you like to (d)elete the file and start fresh, or (a)ppend and add the file:";
    cin >> appendDelete;
    while (cin.fail()==1) { 
        failInput();
        cout << "Would you like to (d)elete the file and start fresh, or (a)ppend and add the file:";
        cin >> appendDelete;
    }
    
    if (appendDelete == 'd' || appendDelete == 'D') {
        ofstream deleteFile;
        deleteFile.open(fileName, ios::out);
        deleteFile.close();

    } else if (appendDelete == 'a' || appendDelete == 'A') {
        ;
    } else {
        cout << "Please use a valid input, either 'A' or 'D'." << endl;
    }
}


int celToFar(string fileName) {
    // variables
    double far, cel;

    try {

        // input
        cout << "Enter degrees in Celsius:";
        cin >> cel;

        if (cel < 0.0) {
            throw 1;
        } else if (cel > 100.0) {
            throw 2;
        } else {
            // processing
            far = (cel*9.0/5.0) + 32.0;

            // output
            cout << "The temperature in farenheit is " << far << "°F\n";
        }

        double temp = cel;
        char unit = 'C';
        inputFile(fileName, temp, unit);

    } catch (int e) {
        cout << "An exception occured, Exception Number:" << e << endl;
    }

    return far;
}

int farToCel(string fileName) {
    // variables
	double cel=0.0, far=0.0;

    try {

        // input
        cout << "Enter degrees in Farenheit:";
        cin >> far;

        if (far < 0.0) {
            throw 1;
        } else if (far > 100.0) {
            throw 2;
        } else {
            // processing
            cel = (far-32.0)/1.8;

            // output
            cout << "The temperature in celsius is " << cel << "°C\n";
        }

        double temp = far;
        char unit = 'F';
        inputFile(fileName, temp, unit);

    } catch (int e) {
        cout << "An exception occured, Exception Number:" << e << endl;
    }

    return cel;
}

void failInput() {
    cout << "\nError! Cannot read input.\n";
    cin.clear();
    cin.ignore(INT_MAX,'\n');
}

void inputFile(string fileName, double temp, char unit) {
        ofstream output;
        output.open(fileName, ios::app);

        if (output.is_open()==1) {
        output.setf(ios::fixed | ios::right);
        output << setprecision(3);
        output << temp << " " << unit << endl;
            if (output.fail()==1) {
                cerr << "Error writing to file!\n";
            }
        }
        output.close();
}

void celToFarFile(double fileTemp) {
    double far;
    cout << "The tempeture from file is " << fileTemp << " °C." << endl;
    try {
        if (fileTemp < 0.0) {
            throw 1;
        } else if (fileTemp > 100.0) {
            throw 2;
        } else {
            // processing
            far = (fileTemp*9.0/5.0) + 32.0;

            // output
            cout << "The temperature in farenheit is " << far << "°F\n";
        }  
    } catch (int e) {
        cout << "An exception occured, Exception Number:" << e << endl;
    }
}

void farToCelFile(double fileTemp) {
    double cel;
    cout << "The tempeture from file is " << fileTemp << " °F." << endl;
    try {
        if (fileTemp < 0.0) {
            throw 1;
        } else if (fileTemp > 100.0) {
            throw 2;
        } else {
            // processing
            cel = (fileTemp-32.0)/1.8;

            // output
            cout << "The temperature in celsius is " << cel << "°C\n";
        }

    } catch (int e) {
        cout << "An exception occured, Exception Number:" << e << endl;
    }
}
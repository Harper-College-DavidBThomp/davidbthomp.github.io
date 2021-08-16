/*
* Yikes the clown cannon revisted assignment
* Take input in MPH and angle in degrees and calculates landing
*/

// Error Checking


#include <iostream>
#include <cmath>
#include <string>
#include <fstream>
#include <iomanip>
#include <climits>

using namespace std;

void maths(double velocity, double angle, string fileName);
void inputs(string fileName);
void failInput();

int main() {

	// File Opening
	string fileName, x;
	cout << "Please input file name you would like to work with:";
	cin >> fileName;

	while (cin.fail()==1) { 
		failInput();
		cout << "Please input file name you would like to work with:";
		cin >> fileName;
	}

	ifstream myfile(fileName);

	double v, a;
	char appendDelete, test;
	bool runAgain;
	runAgain = true;

	try {
        if (myfile.is_open()) {

			while (myfile >> v >> a) {
				;
            }
            myfile.close();


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

				while (runAgain == true) {
					inputs(fileName);


					cout << "Run program again? (Y)es or (N)o:";
					cin >> test;
					if (test == 'y' || test == 'Y') {
						runAgain = true;
					} else {
						runAgain = false;
					}

				}

			} else if (appendDelete == 'a' || appendDelete == 'A') {

				while (runAgain == true) {
					inputs(fileName);

					cout << "Run program again? (Y)es or (N)o:";
					cin >> test;
					if (test == 'y' || test == 'Y') {
						runAgain = true;
					} else {
						runAgain = false;
					}
				}

			} else {
				cout << "Please use a valid input, either 'A' or 'D'." << endl;
			}

        } else {
            cout << "Unable to find file." << endl << "Please enter a file name for data:";
			cin >> fileName;

			while (cin.fail()==1) { 
				failInput();
				cout << "Unable to find file." << endl << "Please enter a file name for data:";
				cin >> fileName;
			}
			ofstream thefile(fileName);
			cout << "Run program again and use new file name." << endl;
        }
    } catch (int e) {
        cout << "Failure:" << e;
    }


	return 0;
}

void maths(double velocity, double angle, string fileName) {
	// processing
	// Distance, Time, and Height
	double feetps=velocity * 1.4667;
	double angles = angle*M_PI/180.0;

	double distance=(pow(feetps,2)/32.0) * sin(2.0*angles);

	double timeAir=distance/(feetps * cos(angles));

	double maxHeight=(feetps * sin(angles)) * timeAir / 2.0 - 0.5 * 32.0 * pow(timeAir/2.0, 2.0);

	// Processing and output for x,y cordinates
	double timerSpace = timeAir/20.0;
	double incTime = 0.0;
	cout << "\nYikes velocity is " << velocity << " MPH" << endl;
	cout << "Yikes angle of launch is " << angle << " degrees" << endl;
	while (incTime < timeAir)
	{
		double xCord=(feetps * cos(angles)) * incTime;
		double yCord=(feetps * sin(angles)) * incTime - 0.5 * 32 * pow(incTime, 2);
		cout << "Time: "<< incTime << " Seconds   X-Cord: " << xCord << " Feet   Y-Cord: " << yCord << " Feet   \n";
		incTime= incTime+timerSpace;
	}
	
	// output

	cout << "Yikes will land " << distance << " feet from the cannon\nHe will spend " << timeAir << " seconds the air.\nHis maximum height wil be " << maxHeight << " feet.\n" << endl;;

	// Expected output for 100MPH 30 Deg:
	// Distance = 578.815~       Height = 83.545~    Time = 4.56~   
	// Based from own calculations and quick rechecks from https://amesweb.info/Physics/Trajectory-Calculator.aspx

	ofstream output;
	output.open(fileName, ios::app);

	if (output.is_open()==1) {
	output.setf(ios::fixed | ios::right);
	output << setprecision(3);
	output << velocity << endl;
	output << angle << endl;
	output << "Yikes will land " << distance << " feet from the cannon." << endl;
	output << "He will spend " << timeAir << " seconds in the air." << endl;
	output << "His maxuimum height will be " << maxHeight << " feet." << endl;
		if (output.fail()==1) {
			cerr << "Error writing to file!\n";
		}
	}
	output.close();

	

}

void inputs(string fileName) {
	// variables
	double velocity=0.0, angle=0.0;

	// input
	cout << "Yikers the clown is being shot out a cannon, help him determine where he lands!\n";
	cout << "Enter his velocity (Miles Per Hour) and angle (degrees):";
	cin >> velocity >> angle;

	while (cin.fail()==1) { 
		failInput();
		cout << "Yikers the clown is being shot out a cannon, help him determine where he lands!\n";
		cout << "Enter his velocity (Miles Per Hour) and angle (degrees):";
		cin >> velocity >> angle;
	}

	if (velocity < 0) {
		cout << "The velocity must be greater than 0 miles per hour.\n";
	} else if (angle < 0 || angle > 90) {
		cout << "The angle must be between 0 and 90 degrees.\n";
	} else {
		maths(velocity, angle, fileName);
	}

}

void failInput() {
	// while (cin.fail()==1) { 
	// 	cout << "\nError! Cannot read input.\n";
	// 	cin.clear();
	// 	cin.ignore(INT_MAX,'\n');
	// 	cout << "1. Add Planet\n2. Delete Planet\n3. Find Planet\n4. List Planets\n5. Order Planets\n6. Quit\nEnter choice number:";
	// 	cin >> menuChoice;
	// }

    cout << "\nError! Cannot read input.\n";
    cin.clear();
    cin.ignore(INT_MAX,'\n');

}
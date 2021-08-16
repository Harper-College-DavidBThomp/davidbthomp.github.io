
/*
* Quadratic Formula Assignment
* Take User (A,B,C) = 0 and output x1 and x2
*/

#include <iostream>
#include <climits>
#include <cmath>
#include <string>

using namespace std;

double quadPositive(double a, double b, double c);
double quadNegative(double a, double b, double c);

int main()
{
    double a=0.0,b=0.0,c=0.0;

    // Done is possible starting pooint for looping math
    bool done=false;

    do {

        try {

            // Get user input
            cout << "\nPerform the Quadratic formula.\nPlease input A,B, and C in equation. (Ax^2 + Bx + C = 0):";
            cin >> a >> b >> c;

            // Error Checking for inputs
            while (cin.fail()==1) {
                cout << "\nError! Cannot read input\n";
                cin.clear();
                cin.ignore(INT_MAX,'\n');
                cout << "Please input A,B, and C in equation. (Ax^2 + Bx + C = 0):";
                cin >> a >> b >> c;
            }

            // Checking 4AC is less than b^2
            while ((4*a*c) > (b*b)) {
                cout << "Cannot complete equation, 4AC is larger than B^2.\n";
                cin.clear();
                cin.ignore(INT_MAX,'\n');
                cout << "Please input A,B, and C in equation. (Ax^2 + Bx + C = 0):";
                cin >> a >> b >> c;
            }

            // Functions to do math
            double x1 = quadPositive(a,b,c);
            double x2 = quadNegative(a,b,c);

            // Output equation results
            cout << "X1 (positive equation) is equal to " << x1 << "\nX2 (negative equation) is equal to " << x2 << "\nX = " << x1 << ", " << x2 << ".\n";


        } catch (int e) {
            // Stores error in int e and then displays error.
            done=false;
            cerr << "An exception was thrown! Error number " << e << endl;
        }


        // Check to run again
        string runAgain;
        cout << "Would you like to run the program again? (Y)es or (N)o." << endl;
        cin >> runAgain;
        if (runAgain == "Y" || runAgain == "y") {
            done = false;
        } else {
            done = true;
        }

    } while (done==false);

    return 0;
}

double quadPositive(double a, double b, double c) {
    // Calculates positive Quadratic Formula
    // x1 = (-B + (B2 – 4AC)1/2 )  / 2A

    double x1 = (-b + sqrt((pow(b,2.0)-4.0*a*c)))/(2.0*a);

    return x1;

}

double quadNegative(double a, double b, double c) {
    // Calculates negative Quadratic Formula
    // x2 = (-B - (B2 – 4AC)1/2 )  / 2A

    double x2 = (-b - sqrt((pow(b,2.0)-4.0*a*c)))/(2.0*a);

    return x2;

}
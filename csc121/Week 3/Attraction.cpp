/*
* Attraction Assignment
* Calculates distance and force of 2 spheres
*/

#include <iostream>
#include <cmath>
#include <climits>
#include <string>

using namespace std;
        
        
int main() {
    double sr1=0.0, sr2=0.0, sm1=0.0, sm2=0.0, distance=0.0, grav=6.67408*pow(10.0,-11.0);
    // Get Sphere Information
    cout << "Enter sphere's radius and then sphere's masses in Meters and KGs(Sphere 1 Radius, Sphere 2 Radius, Sphere 1 Mass, Sphere 2 Radius):";
    cin >> sr1 >> sr2 >> sm1 >> sm2;
    while (cin.fail()==1) {
        cout << "\nError! Cannot read input\n";
        cin.clear();
        cin.ignore(INT_MAX,'\n');
        cout << "Enter sphere's radius and then sphere's masses (Sphere 1 Radius, Sphere 2 Radius, Sphere 1 Mass, Sphere 2 Radius):";
        cin >>  sr1 >> sr2 >> sm1 >> sm2;
    }
    while (sr1 < 0.0 || sr2 < 0.0 || sm1 < 0.0 || sm2 < 0.0) {
        cout << "Error! Length must be greater than 0.0 for all sides.\n";
        cout << "Enter sphere's radius and then sphere's masses (Sphere 1 Radius, Sphere 2 Radius, Sphere 1 Mass, Sphere 2 Radius):";
        cin >>  sr1 >> sr2 >> sm1 >> sm2;
    }

    // Get Distance Information
    cout << "Enter the distance between the two spheres in meters:";
    cin >> distance;
    while (cin.fail()==1) {
        cout << "\nError! Cannot read input\n";
        cin.clear();
        cin.ignore(INT_MAX,'\n');
        cout << "Enter the distance between the two spheres in meters:";
        cin >>  distance;
    }
    while (distance < 0.0) {
        cout << "Error! Length must be greater than 0.0 for all sides.\n";
        cout << "Enter the distance between the two spheres in meters:";
        cin >>  distance;
    }

    // Calculations
    double force = (sm1*sm2/pow(distance,2.0)*grav);
    double calcDistance = (distance+sr1+sr2);

    // Processing and output distance and force
    double distanceSpace = calcDistance/100.0;
    double incDistance = 0.0;
    while (incDistance < calcDistance)
    {
        double forceA = sm1*sm2/pow((incDistance-sr1-sr2),2.0)*grav;
        cout << "Distance: "<< incDistance << " Meters   Force: " << forceA << " KGs\n";
        incDistance= incDistance+distanceSpace;
    }

    cout << "The distance edge to edge is " << calcDistance << ".\nThe force is " << force << " KGs.\n";
}
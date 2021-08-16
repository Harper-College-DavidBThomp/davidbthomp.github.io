/*
* Menu and shapes Assignment
* Allows selection of shape and calculation of surface area and volume
*/

#include <iostream>
#include <cmath>
#include <climits>

using namespace std;

void failInput();
double cubeSurfaceArea(double cubeLen);
double cubeVolume(double cubeLen);
double sphereSurfaceArea(double sphereRad);
double sphereVolume(double sphereRad);
double rectSurfaceArea(double rectLen, double rectWid, double rectHei);
double rectVolume(double rectLen, double rectWid, double rectHei);
double cylinderSurfaceArea(double cylinderRad, double cylinderHei);
double cylinderVolume(double cylinderRad, double cylinderHei);
double coneSurfaceArea(double coneRad, double coneHei);
double coneVolume(double coneRad, double coneHei);

int main()
{
	int menuChoice=0;

	// print menu
	cout << "1. Cube\n2. Sphere\n3. Rectangular Prism\n4. Cylinder\n5. Cone\n6. Quit\nEnter choice number: ";
	cin >> menuChoice;

    while (cin.fail()==1) { 
        failInput();
		cout << "1. Cube\n2. Sphere\n3. Rectangular Prism\n4. Cylinder\n5. Cone\n6. Quit\nEnter choice number: ";
        cin >> menuChoice;
    }

	while (menuChoice != 6) {

        // Menu choice for cube
		if (menuChoice==1) {
		    double cubeLen=0.0;
			cout << "Enter length of edge in inches:";
        	cin >> cubeLen;
            while (cin.fail()==1) {
        		failInput();
				cout << "Enter length of edge in inches:";
		        cin >> cubeLen;
	        }
			while (cubeLen < 0.0) {
				cout << "Error! Length must be greater than 0.0\n";
				cout << "Enter side in inches:";
        		cin >> cubeLen;
			}
			double cubeSA=cubeSurfaceArea(cubeLen);
            double cubeVOL=cubeVolume(cubeLen);
			cout << "The surface area of the cube is " << cubeSA << " inches.\nThe volume of the cube is " << cubeVOL << " cubic inches.\n";
		}

        // Menu choice for Sphere
		if (menuChoice==2) {
		    double sphereRad=0.0;
			cout << "Enter radius in inches:";
        	cin >> sphereRad;
            while (cin.fail()==1) {
       			failInput();
		        cout << "Enter radius in inches:";
		        cin >> sphereRad;
	        }
			while (sphereRad < 0.0) {
			 	cout << "Error! Radius must be greater than 0.0\n";
				cout << "Enter radius in inches:";
        		cin >> sphereRad;
			}
			double sphereSA=sphereSurfaceArea(sphereRad);
            double sphereVOL=sphereVolume(sphereRad);
			cout << "The surface area of the sphere is " << sphereSA << " inches.\nThe volume of the cube is " << sphereVOL << " cubic inches.\n";
		}

        // Menu choice for Rectangular Prism
		if (menuChoice==3) {
		    double rectLen=0.0, rectWid=0.0, rectHei=0.0;
			cout << "Enter Length, Width, and Height in inches:";
        	cin >> rectLen >> rectWid >> rectHei;
            while (cin.fail()==1) {
       			failInput();
		        cout << "Enter Length, Width, and Height in inches:";
		        cin >>  rectLen >> rectWid >> rectHei;
	        }
			while (rectLen < 0.0 || rectWid < 0.0 || rectHei < 0.0) {
			 	cout << "Error! All values must be greater than 0.0\n";
				cout << "Enter Length, Width, and Height in inches::";
        	    cin >> rectLen >> rectWid >> rectHei;
			}
			double rectSA=rectSurfaceArea(rectLen, rectWid, rectHei);
            double rectVOL=rectVolume(rectLen, rectWid, rectHei);
			cout << "The surface area of the rectangular prism is " << rectSA << " inches.\nThe volume of the rectangular prism is " << rectVOL << " cubic inches.\n";
		}

        // Menu choice for Cylinder
		if (menuChoice==4) {
		    double cylinderRad=0.0, cylinderHei=0.0;
			cout << "Enter Cylinder Radius and Height in inches:";
        	cin >> cylinderRad >> cylinderHei;
            while (cin.fail()==1) {
       			failInput();
		        cout << "Enter Cylinder Radius and Height in inches:";
		        cin >> cylinderRad >> cylinderHei;
	        }
			while (cylinderRad < 0.0 || cylinderHei < 0.0) {
			 	cout << "Error! All values must be greater than 0.0\n";
			    cout << "Enter Cylinder Radius and Height in inches:";
        	    cin >> cylinderRad >> cylinderHei;
			}
			double cylinderSA=cylinderSurfaceArea(cylinderRad, cylinderHei);
            double cylinderVOL=cylinderVolume(cylinderRad, cylinderHei);
			cout << "The surface area of the cylinder is " << cylinderSA << " inches.\nThe volume of the cylinder is " << cylinderVOL << " cubic inches.\n";
		}

        // Menu choice for Cone
		if (menuChoice==5) {
		    double coneRad=0.0, coneHei=0.0;
			cout << "Enter Cone Radius and Height in inches:";
        	cin >> coneRad >> coneHei;
            while (cin.fail()==1) {
       			failInput();
		        cout << "Enter Cone Radius and Height in inches:";
		        cin >> coneRad >> coneHei;
	        }
			while (coneRad < 0.0 || coneHei < 0.0) {
			 	cout << "Error! All values must be greater than 0.0\n";
			    cout << "Enter Cone Radius and Height in inches:";
        	    cin >> coneRad >> coneHei;
			}
			double coneSA=coneSurfaceArea(coneRad, coneHei);
            double coneVOL=coneVolume(coneRad, coneHei);
			cout << "The surface area of the cone is " << coneSA << " inches.\nThe volume of the cone is " << coneVOL << " cubic inches.\n";
		}

		if (menuChoice != 1 && menuChoice != 2 && menuChoice != 3 && menuChoice != 4 && menuChoice != 5 && menuChoice != 6) {
			cout << "\nError! Invalid menu choice\n";
		}
            
		// print menu
		cout << "Please select another shape or quit program.\n1. Cube\n2. Sphere\n3. Rectangular Prism\n4. Cylinder\n5. Cone\n6. Quit\nEnter choice number: ";
		cin >> menuChoice;

        while (cin.fail()==1) {
       		failInput();
		    cout << "1. Cube\n2. Sphere\n3. Rectangular Prism\n4. Cylinder\n5. Cone\n6. Quit\nEnter choice number: ";
		    cin >> menuChoice;
	    }

	} // while (menuChoice != QUIT)

	cout << "Thanks for using this program.\n";
	return 0;
}

double cubeSurfaceArea(double cubeLen) {
    double cubeSA=6*pow(cubeLen, 2.0);
    return cubeSA;
}

double cubeVolume(double cubeLen) {
    double cubeVOL=pow(cubeLen, 3.0);
    return cubeVOL;
}

double sphereSurfaceArea(double sphereRad) {
    double sphereSA=4.0*M_PI*pow(sphereRad, 2.0);
    return sphereSA;
}

double sphereVolume(double sphereRad) {
    double sphereVOL=(4.0/3.0)*M_PI*pow(sphereRad, 3.0);
    return sphereVOL;
}

double rectSurfaceArea(double rectLen, double rectWid, double rectHei) {
    double rectSA=2*(rectWid*rectLen+rectHei*rectLen+rectHei*rectWid);
    return rectSA;
}

double rectVolume(double rectLen, double rectWid, double rectHei) {
    double rectVOL=rectLen*rectWid*rectHei;
    return rectVOL;
}

double cylinderSurfaceArea(double cylinderRad, double cylinderHei) {
    double cylinderSA=2.0*M_PI*cylinderRad*cylinderHei+2.0*M_PI*pow(cylinderRad,2.0);
    return cylinderSA;
}

double cylinderVolume(double cylinderRad, double cylinderHei) {
    double cylinderVOL=M_PI*pow(cylinderRad,2.0)*cylinderHei;
    return cylinderVOL;
}

double coneSurfaceArea(double coneRad, double coneHei) {
    double coneSA=M_PI*coneRad*(coneRad+sqrt(pow(coneHei,2)+pow(coneRad,2)));
    return coneSA;
}

double coneVolume(double coneRad, double coneHei) {
    double coneVOL=M_PI*pow(coneRad,2)*(coneHei/3);
    return coneVOL;
}

void failInput() {
    cout << "\nError! Cannot read input\n";
    cin.clear();
    cin.ignore(INT_MAX,'\n');
}
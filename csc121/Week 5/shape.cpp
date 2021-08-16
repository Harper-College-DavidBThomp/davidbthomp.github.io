/*
* Shapes 2 Assignment
* User input cannot be negative
* Seperate Class for each Shape
* Dimensions will be members and private
* Each class will have:
* Volume function, surface area function, constructor, get and set functions.
*/

#include <iostream>
#include <cmath>
#include <climits>

using namespace std;

class cube {
    private:
        double edge;
    public:
		bool setEdge(double x);
		double getEdge();
        double cubeSurfaceArea();
		double cubeVolume();
};

bool cube::setEdge(double x) {
	bool rv=false;
	edge=x;
	rv=true;
	return rv;
}

double cube::getEdge() {
	return edge;
}

double cube::cubeSurfaceArea() {
	return 6*pow(edge, 2.0);
}

double cube::cubeVolume() {
	return pow(edge, 3.0);
}



class sphere {
	private: 
		double sphereRad;
	public:
		bool setRad(double x);
		double getRad();
		double sphereSurfaceArea();
		double sphereVolume();
};

bool sphere::setRad(double x) {
	bool rv=false;
	sphereRad=x;
	rv=true;
	return rv;
}

double sphere::getRad() {
	return sphereRad;
}

double sphere::sphereSurfaceArea() {
	return 4.0*M_PI*pow(sphereRad, 2.0);;
}

double sphere::sphereVolume() {
	return (4.0/3.0)*M_PI*pow(sphereRad, 3.0);
}



class rectPrism {
	private:
		double rectLen, rectWid, rectHei;
	public:
		bool setRectLen(double x);
		bool setRectWid(double y);
		bool setRectHei(double z);
		double getRectLen();
		double getRectWid();
		double getRectHei();
		double rectSurfaceArea();
		double rectVolume();
};

bool rectPrism::setRectLen(double x) {
	bool rv=false;
	rectLen=x;

	rv=true;
	return rv;
}

bool rectPrism::setRectWid(double y) {
	bool rv=false;
	rectWid=y;

	rv=true;
	return rv;
}

bool rectPrism::setRectHei(double z) {
	bool rv=false;
	rectHei=z;

	rv=true;
	return rv;
}

double rectPrism::getRectLen() {
	return rectLen;
}

double rectPrism::getRectWid() {
	return rectWid;
}

double rectPrism::getRectHei() {
	return rectHei;
}

double rectPrism::rectSurfaceArea() {
	return 2*(rectWid*rectLen+rectHei*rectLen+rectHei*rectWid);
}

double rectPrism::rectVolume() {
	return rectLen*rectWid*rectHei;
}



class cylinder {
	private:
		double cylinderRad, cylinderHei;
	public:
		bool setCyliRad(double x);
		bool setCyliHei(double y);
		double getCyliRad();
		double getCyliHei();
		double cyliSurfaceArea();
		double cyliVolume();
};

bool cylinder::setCyliRad(double x) {
	bool rv=false;
	cylinderRad=x;

	rv=true;
	return rv;
}

bool cylinder::setCyliHei(double y) {
	bool rv=false;
	cylinderHei=y;

	rv=true;
	return rv;
}

double cylinder::getCyliRad() {
	return cylinderRad;
}

double cylinder::getCyliHei() {
	return cylinderHei;
}

double cylinder::cyliSurfaceArea() {
	return 2.0*M_PI*cylinderRad*cylinderHei+2.0*M_PI*pow(cylinderRad,2.0);
}

double cylinder:: cyliVolume() {
	return M_PI*pow(cylinderRad,2.0)*cylinderHei;
}



class cone {
	private:
		double coneRad, coneHei;
	public:
		bool setConeRad(double x);
		bool setConeHei(double y);
		double getConeRad();
		double getConeHei();
		double coneSurfaceArea();
		double coneVolume();
};

bool cone::setConeRad(double x) {
	bool rv=false;
	coneRad=x;

	rv=true;
	return rv;
}

bool cone::setConeHei(double y) {
	bool rv=false;
	coneHei=y;

	rv=true;
	return rv;
}

double cone::getConeRad() {
	return coneRad;
}

double cone::getConeHei() {
	return coneHei;
}

double cone::coneSurfaceArea() {
	return M_PI*coneRad*(coneRad+sqrt(pow(coneHei,2)+pow(coneRad,2)));
}

double cone:: coneVolume() {
	return M_PI*pow(coneRad,2)*(coneHei/3);
}

void inputCube(cube& edge);
void inputSphere(sphere& sphereRad);
void inputRect(rectPrism& rect);
void inputCyli(cylinder& cyli);
void inputCone(cone& cone);
void failInput();

int main() {

	int menuChoice=0;

	// print menu
	cout << "1. Cube\n2. Sphere\n3. Rectangular Prism\n4. Cylinder\n5. Cone\n6. Quit\nEnter choice number: ";
	cin >> menuChoice;

	// If menu input fails, reprint and reenter number
    while (cin.fail()==1) { 
        failInput();
        cout << "1. Cube\n2. Sphere\n3. Rectangular Prism\n4. Cylinder\n5. Cone\n6. Quit\nEnter choice number: ";
        cin >> menuChoice;
    }


    while (menuChoice != 6) {

        // Menu choice for cube
		if (menuChoice==1) {
			// Inputs
		   cube edge;
		   inputCube(edge);

			// Outputs
			cout << "The surface area of the cube is " << edge.cubeSurfaceArea() << " inches.\n";
			cout << "The volume of the cube is " << edge.cubeVolume() << " cubic inches.\n";

		}

        // Menu choice for Sphere
		if (menuChoice==2) {
		    sphere sphereRad;
			inputSphere(sphereRad);

			cout << "The surface area of the sphere is " << sphereRad.sphereSurfaceArea() << " inches.\n";
			cout << "The volume of the sphere is " << sphereRad.sphereVolume() << " cubic inches.\n";
		}

        // Menu choice for Rectangular Prism
		if (menuChoice==3) {
			rectPrism rect;
			inputRect(rect);

			cout << "The surface area of the rectangular prism is " << rect.rectSurfaceArea() << " inches.\n";
			cout << "The volume of the sphere is " << rect.rectVolume() << " cubic inches.\n";
		}

        // Menu choice for Cylinder
		if (menuChoice==4) {
			cylinder cyli;
			inputCyli(cyli);

			cout << "The surface area of the cylinder is " << cyli.cyliSurfaceArea() << " inches.\n";
			cout << "The volume of the cylinder is " << cyli.cyliVolume() << " cubic inches.\n";
		}

        // Menu choice for Cone
		if (menuChoice==5) {
			cone cone;
			inputCone(cone);

			cout << "The surface area of the cone is " << cone.coneSurfaceArea() << " inches.\n";
			cout << "The volume of the cone is " << cone.coneVolume() << " cubic inches.\n";
		}

		if (menuChoice != 1 && menuChoice != 2 && menuChoice != 3 && menuChoice != 4 && menuChoice != 5 && menuChoice != 6) {
			cout << "\nError! Invalid menu choice\n";
		}
            
		// print menu
		cout << "Please select another shape or quit program.\n1. Cube\n2. Sphere\n3. Rectangular Prism\n4. Cylinder\n5. Cone\n6. Quit\nEnter choice number: ";
		cin >> menuChoice;

	} // while (menuChoice != QUIT)

	cout << "Thanks for using this program.\n";
	return 0;    
}

void failInput() {
    cout << "\nError! Cannot read input\n";
    cin.clear();
    cin.ignore(INT_MAX,'\n');
}

// Input for cube
void inputCube(cube& edge) {
	double x;
	cout << "Edge Length in Inches:";
	cin >> x;

	while (cin.fail()==1) { 
        failInput();
		cout << "Edge Length in Inches:";
		cin >> x;
    }

	while (x <= 0.0) {
		cout << "The edge must be greater than 0.\nEdge Length in Inches:";
		cin >> x;
	}

	edge.setEdge(x);

}

void inputSphere(sphere& sphereRad) {
	double x;
	cout << "Sphere Radius in Inches:";
	cin >> x;

	while (cin.fail()==1) { 
        failInput();
		cout << "Sphere Radius in Inches:";
		cin >> x;
    }

	while (x <= 0.0) {
		cout << "The sphere radius must be greater than 0.\nSphere Radius in Inches:";
		cin >> x;
	}

	sphereRad.setRad(x);

}

void inputRect(rectPrism& rect) {
	double x, y, z;
	cout << "Rectangle Length, Width, and Height in Inches:";
	cin >> x >> y >> z;

	while (cin.fail()==1) { 
        failInput();
		cout << "Rectangle Length, Width, and Height in Inches:";
		cin >> x >> y >> z;
    }

	while (x <= 0.0) {
		cout << "The side lengths must be greater than 0.\nRectangle Length, Width, and Height in Inches:";
		cin >> x >> y >> z;
	}

	rect.setRectLen(x);
	rect.setRectWid(y);
	rect.setRectHei(z);

}

void inputCyli(cylinder& cyli) {
	double x, y;
	cout << "Enter Cylinder Radius and Height in inches:";
	cin >> x >> y;

	while (cin.fail()==1) { 
        failInput();
		cout << "Enter Cylinder Radius and Height in inches:";
		cin >> x >> y;
    }

	while (x <= 0.0) {
		cout << "The radius and height must be greater than 0.\nEnter Cylinder Radius and Height in inches:";
		cin >> x >> y;
	}

	cyli.setCyliRad(x);
	cyli.setCyliHei(y);

}

void inputCone(cone& cone) {
	double x, y;
	cout << "Enter Cone Radius and Height in inches:";
	cin >> x >> y;

	while (cin.fail()==1) { 
        failInput();
		cout << "Enter Cone Radius and Height in inches:";
		cin >> x >> y;
    }

	while (x <= 0.0) {
		cout << "The radius and height must be greater than 0.\nEnter Cone Radius and Height in inches:";
		cin >> x >> y;
	}

	cone.setConeRad(x);
	cone.setConeHei(y);

}
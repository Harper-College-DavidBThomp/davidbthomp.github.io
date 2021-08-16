/*
* Monthly Balance Calculator
* This includes if the contribution was put in when the account is created
* To add after first month, commented code is example, index would be 1
*/

#include <iostream>
#include <cmath>

using namespace std;

int main () {
    // variables
	double balance=0.0, apr=0.0, deposits=0.0, months=0.0;

	// input
	cout << "Enter initial balance, annual percentage rate, monthly deposits, and amount of months account will be open. (All values as numbers EX: 111.23):";
	cin >> balance >> apr >> deposits >> months;

    
	// processing
    apr=apr/100.0;

    // IF FIRST MONTH DOESNT GET ADDITIONAL MONEY
    // double firstMonth = (apr/12.0+1.0)*balance;
    // balance=firstMonth;
    // cout << "The balance month 1 is $" << firstMonth << endl;
    
    int index=0;
    while (index < months) {
        double monthly = (apr/12.0+1.0)*balance+deposits;
        cout << "The balance month " << index + 1 << " is $" << monthly << endl;
        balance=monthly;
        index++;
    }

	return 0;
}
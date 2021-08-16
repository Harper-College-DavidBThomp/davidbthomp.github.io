/*
 * Random dice 12 sided
*/

#include <iostream>
#include <cstdlib>

using namespace std;

int main()
{
    srand(time(0));
    
    cout << "Rolling Dice!\n";

    int roll;
    int min = 1;
    int max = 12;

    roll = rand() % (max - min + 1) + min;

    cout << "On the 12 sided dice you rolled: " << roll << "\n";
    return 0;
}
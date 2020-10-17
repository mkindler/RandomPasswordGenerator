# RandomPasswordGenerator

## Description

This project utilizes dynamically updated `HTML` and `CSS` powered by `JavaScript` to create a random password generator application for an employee.

## Task
The employee wants to randomly generate a password that meets certain criteria so that they can create a strong password that provides greater secruity.  The randomly generated password <i>must</i> be between 8 and 128 characters long, and <i>must</i> include at least one of four character type criteria:  lowercase, uppercase, numeric, and/or special characters.


The random password generator will create a password when the `Generate Password` button is clicked.  The following steps will then take place:

* A prompt will ask the employee how many characters they would like their password to be.

    * The employee must select a number that is a minimum length of 8 characters, and a maximum length of 128 characters.
    * If the employee does <i>not</i> select a number that is greater than or equal to 8, and less than or equal to 128, an alert will be triggered:  <i>"Sorry, please enter a number between 8 and 128."</i>  The application will then circle back to the starting point, and the employee will be required to click the `Generate Password` button again.
    * If the employee <i>does</i> select a number that is greater than or equal to 8, and less than or equal to 128, a set of confirmation statements will run:

        * <i>Would you like lowercase letters to be included in your password?</i>
        * <i>Would you like uppercase letters to be included in your password?</i>
        * <i>Would you like numbers to be included in your password?</i>
        * <i>Would you like special characters to be included in your password?</i>

    * The employee generating the password is required to select at least one of the four character type criteria when the application runs:  lowercase, uppercase, numeric, and/or special characters.

        * If the employee does <i>not</i> select one of the four character type criteria, an alert will be triggered:  <i>"Please select at least one type of character you would like to include!</i>  The application will then circle back to the starting point, and the employee will be required to click the `Generate Password` button again.
        * If the employee <i>does</i> select one of the four character type criteria, then a random password will be generated.

## Usage

This application can be used by employees to generate a random password that will be strong and provides greater security by meeting certain criteria, including length and character types included.
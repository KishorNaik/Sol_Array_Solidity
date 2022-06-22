//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ArrayCon{

    // Create Struct of Customer
    struct Customer{
        uint id;
        string firstName;
        string lastName;
    }

    // Create a State Variable (Storage)
    Customer[] private customers;

    function createCustomer(uint _id, string memory _firstName,string memory _lastName) public {
        Customer memory _customer=Customer(_id,_firstName,_lastName);
        customers.push(_customer);
    }

    function readCustomer(uint _id) public view returns(Customer memory){
        Customer memory _customer;
        for(uint counter=0; counter<customers.length; counter++){
            if(customers[counter].id==_id){
                _customer=customers[counter];
                break;
            }
        }
        return _customer;
    } 

    function readAllCustomer() public view returns(Customer[] memory){
        return customers;
    }  

    function updateCustomer(uint _id,string memory _firstName,string memory _lastName) public returns(Customer memory){
        Customer memory _customer;
        for(uint counter=0; counter<customers.length; counter++){
            if(customers[counter].id==_id){
                
                customers[counter].firstName=_firstName;
                customers[counter].lastName=_lastName;

                _customer=customers[counter];

                break;
            }
        }
        return _customer;       
    }

    function removeCustomer(uint _id) public{

        for(uint counter=0; counter<customers.length; counter++){
            if(customers[counter].id==_id){

                // When we run the delete function, actually we are not removing the number from the array.
                // We are just removing the value of that index and switching it to the default value.
                // So length of the array will literally remain the same.
                delete customers[counter];

                //Solution to Remove Item with Index
                customers[counter]=customers[customers.length -1];
                customers.pop();

                break;
            }
        }     
    }   

}
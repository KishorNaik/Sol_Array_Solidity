import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Array-Example", function () {
  it("#Test1 - Customer-Create", async function () {

    const Contract = await ethers.getContractFactory("ArrayCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    // Assert
    await contract.createCustomer(1,"Kishor","Naik");

    let customer:any=await contract.readCustomer(1);
    console.log(`Customer =>${JSON.stringify(customer)}`);

    let customers=await contract.readAllCustomer();
    console.log(`All Customers List => ${customers}`);
    
    // Test
    expect(customer.firstName).to.equal("Kishor");
  });

  it("#Test2 - Customer-Update", async function () {

    const Contract = await ethers.getContractFactory("ArrayCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    // Assert
    // Create customer
    await contract.createCustomer(1,"Kishor","Naik");
    await contract.createCustomer(2,"Yogesh","Naik");
    await contract.createCustomer(3,"Eshan","Naik"); // Spell wrong

    // Update Customer

    await contract.updateCustomer(3,"Eshaan","Naik");

    let customer:any=await contract.readCustomer(3);
    console.log(`Customer =>${JSON.stringify(customer)}`);

    let customers=await contract.readAllCustomer();
    console.log(`All Customers List => ${customers}`);
    
    // Test
    expect(customer.firstName).to.equal("Eshaan");
  });

  it.only("#Test3 - Customer-Remove", async function () {

    const Contract = await ethers.getContractFactory("ArrayCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    // Assert
    // Create customer
    await contract.createCustomer(1,"Kishor","Naik");
    await contract.createCustomer(2,"Yogesh","Naik");
    await contract.createCustomer(3,"Eshaan","Naik");

    // Remove Customer
    await contract.removeCustomer(1);

    let customer:any=await contract.readCustomer(1);
    console.log(`Customer =>${JSON.stringify(customer)}`);

    let customers=await contract.readAllCustomer();
    console.log(`All Customers List => ${customers}`);

    // As we have removed the item from the array but the length of the array remains the same.
    // When we delete an item from an array, the length remains the same in solidity.
    console.log(`All Customers Count => ${customers.length}`); 
    


    // Test
    //expect(customers.length).to.equal(2);
  });

});
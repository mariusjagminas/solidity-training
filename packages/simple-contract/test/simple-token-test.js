const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleToken", function () {
  it("the owner balance should be equal to total supply of tokens", async function () {
    const SimpleToken = await ethers.getContractFactory("SimpleToken");
    const token = await SimpleToken.deploy();
    await token.deployed();

    const [owner] = await ethers.getSigners();
    const ownerBalance = await token.balanceOf(owner.address);

    expect(await token.totalSupply()).to.equal(ownerBalance);
  });
});

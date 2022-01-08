const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token A tests", function () {
  it("the owner balance should be equal to total supply of tokens", async function () {
    const TokenA = await ethers.getContractFactory("TokenA");
    const token = await TokenA.deploy(10000);
    await token.deployed();

    const [owner] = await ethers.getSigners();
    const ownerBalance = await token.balanceOf(owner.address);

    expect(await token.totalSupply()).to.equal(ownerBalance);
  });
});

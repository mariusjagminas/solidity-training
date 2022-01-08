const hre = require("hardhat");

const main = async () => {
  const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
  const token = await SimpleToken.deploy();

  await token.deployed();

  console.log("SimpleToken deployed to address:", token.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function generateEmail(testData) {
  let randomNumber = Math.floor(Math.random() * 1000); // generate a random number between 0 and 999
  let email = `${testData.FIRST_NAME.toLowerCase()}.${testData.LAST_NAME.toLowerCase()}${randomNumber}@${
    testData.DOMAIN
  }`;
  return email;
}

export default generateEmail;

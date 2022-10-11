Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('> Unauthorized')) {
      console.error('Cypress caught "> Unauthorized exception", continuing tests', err);
      return false; // test continues
    }
    return true; // test fails
  });
  
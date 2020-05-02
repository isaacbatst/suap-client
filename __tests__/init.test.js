require('dotenv').config()
const { expect, it } = require('@jest/globals')
const createSuapClient = require('../src/index');

describe('test suap client init', () => {
  const suapClient = createSuapClient({
    clientID: process.env.CLIENT_ID,
    redirectURI: process.env.REDIRECT_URI
  });

  it('should init suap client without errors', () => {
    expect(suapClient).toBeDefined();
  })
})
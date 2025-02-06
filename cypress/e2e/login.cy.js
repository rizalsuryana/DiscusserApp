/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */


describe('Login spec', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {

    // Memverifikasi element yang ada pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('it should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi window alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str)=> {
      expect(str).to.equal('"Email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // input email
    cy.get('input[placeholder="Email"]').type('rizal@test.com');
    // clik login button
    cy.get('button').contains(/^Login$/).click();

    // verifikasi windows aler
    cy.on('window:alert', (str)=> {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // fill username
    cy.get('input[placeholder="Email"]').type('rizal@test.com');
    // fill incorect password
    cy.get('input[placeholder="Password"]').type('worong123');
    // click button login
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str)=>{
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    // fill username
    cy.get('input[placeholder="Email"]').type('rizal@dicoding.com');
    // fill incorect password
    cy.get('input[placeholder="Password"]').type('12345678');
    // click button login
    cy.get('button').contains(/^Login$/).click();

    // verification elemetn homepage
    cy.get('nav').contains(/^Discussion$/).should('be.visible');
    cy.get('a').contains('Sign Out').should('be.visible');
    cy.get('button').find('svg').should('be.visible');

  });






});

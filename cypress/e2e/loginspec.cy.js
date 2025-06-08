//nome do nosso teste
describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernamaField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
  }

  //*estamos fazendo o teste no login
  it('Login Success', () =>{   

    //* site que vamos testar,na pagina de login
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
  //* fill in the form(preenchendo o formulario) 
  cy.get(selectorsList.usernamaField).type('Admin')

  cy.get(selectorsList.passwordField).type('admin123')

  //submit the form(enviando formulario)
  cy.get(selectorsList.loginButton).click();

  //saber qual url estamos e verificando o pathname para verificar se realmente esta fazendo login,aqui estamos na aba dashoard
  cy.location('pathname').should('equal','/web/index.php/dashboard/index')
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
  //verificando se realmente a pagina correspode o texto na pagina 
  cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')

    
  })
  //testando login para falhar
  it('Login - fail', () =>{   

    //* site que vamos testar,na pagina de login
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
  //* fill in the form(preenchendo o formulario) 
  cy.get(selectorsList.usernamaField).type('Admim')
  cy.get(selectorsList.passwordField).type('admin12')
  //submit the form(enviando formulario)
  cy.get(selectorsList.loginButton).click();
  cy.get(selectorsList.wrongCredentialAlert)


})
})
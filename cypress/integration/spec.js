describe('Vue server', () => {
  const message = 'Welcome to Your Vue.js App'
  const setNewText = source => source.replace(message, 'Updated')
  const saveSource = source => cy.writeFile('src/App.vue', source)
  beforeEach(() => {
    cy.fixture('App.vue').then(saveSource)
    cy.visit('/')
  })
  it('serves', () => {
    cy.contains('h1', message)
  })
  it('reloads on change', () => {
    cy
      .readFile('src/App.vue')
      .then(setNewText)
      .then(saveSource)
    cy.contains('h1', 'Updated')
  })
})


const {screen, render} = require ('@testing-library/react')

const {FormRegister} = require ('./FormRegister')

describe('Render Form Register', ()=>{
   it('must have elements', ()=>{
       render(FormRegister);
       expect(screen.queryAllByAltText(/Nuevo Usuario/)).toBeInTheDocument();
   })
})
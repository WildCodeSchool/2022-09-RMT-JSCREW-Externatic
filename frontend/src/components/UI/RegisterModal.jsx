import React from 'react'

function RegisterModal({ visible, onclose }) {
  if (!visible) {
    return null
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-darkPink'>
        <h2 className='text-center text-4xl font-bold mt-4'>Inscription</h2>
        <form class="bg-white   px-8 pt-6 pb-8 mb-4">
          <input class="shadow appearance-none border rounded-full w-full bg-grey py-2 px-3 text-black placeholder-black" id="Email" type="text" placeholder="Email" />
          <input class="shadow appearance-none border rounded-full w-full mt-4 py-2 bg-grey px-3 text-black placeholder-black" id="Mot de passe" type="text" placeholder="Mot de passe" />
          <input class="shadow appearance-none border rounded-full w-full mt-4 py-2 px-3 bg-grey text-black placeholder-black" id="Confirmer MDP" type="text" placeholder="Confirmer MDP" />
        </form>
        <div className='mt-4 flex justify-around mb-6'>
          <button type='button' className='rounded-full px-6 border-2 border-darkPink text-darkPink text-2xl' onClick={onclose}>Retour</button>
          <button type='submit' className='rounded-full px-6 bg-darkPink text-white hover:bg-white hover:text-darkPink text-2xl'>Valider</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
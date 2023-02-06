import React from "react";
import "@components/UI/ModalPostuler.css";

function ModalPostuler({ setDisplayModal, offre, createCandidature }) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto top-52">
        <div className="flex flex-col items-center w-full pt-20 gap-y-7">
          <div className="overflow-hidden rounded-lg bg-white shadow-3xl transition-all max-w-lg mx-5">
            <div className="flex flex-col items-center text-black font-bold pt-5 p-8">
              <h1 className="text-center mb-6">
                Confirmez-vous vouloir postuler au poste de :
                <br />
                {offre.poste} ?
              </h1>
              <div className="flex flex-row">
                <button
                  type="button"
                  className="annulationpostuler mx-5"
                  onClick={() => {
                    setDisplayModal(false);
                  }}
                >
                  <span className="text">Annuler</span>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                  </span>
                </button>
                <button
                  type="button"
                  className="validationpostuler mx-5"
                  onClick={() => {
                    createCandidature();
                    setDisplayModal();
                  }}
                >
                  <span className="text">Valider</span>
                  <span className="icon">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      mirror-in-rtl="true"
                    >
                      <path
                        fill="white"
                        d="M10.25 22.987l7.99-9c.51-.57.76-1.28.76-1.99s-.25-1.42-.74-1.98c-.01 0-.01-.01-.01-.01l-.02-.02-7.98-8.98c-1.1-1.24-3.002-1.35-4.242-.25-1.24 1.1-1.35 3-.25 4.23l6.23 7.01-6.23 7.01c-1.1 1.24-.99 3.13.25 4.24 1.24 1.1 3.13.98 4.24-.26z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPostuler;

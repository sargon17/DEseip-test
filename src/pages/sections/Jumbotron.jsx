import HeroImg from "../../assets/Bitcoin 1.png";

export default function Jumbotron() {
  return (
    <>
      <div className="jumbotron">
        <div className="container mx-auto flex flex-row py-24">
          <div className=" w-full sm:w-2/3 md:w-8/12 flex flex-col justify-between">
            <h1 className="h1">
              Quanto costa custodire le tue cripto?{" "}
              <span className="accent-title">Scoprilo con Acme Corp.</span>
            </h1>
            <p className="subtitle1 leading-loose">
              Quando il tuo patrimonio cripto inizia a crescere, custodirlo in
              modo sicuro è fondamentale per evitare di incorrere in truffe e
              rischi.
              <br />
              Prova il servizio di custodia affidabile e trasparente di Acme
              Corp:{" "}
              <span className="subtitle2">
                calcola le tue commissioni mensili e scopri tutti i vantaggi.
              </span>
            </p>
            <button className="btn btn--primary">
              Calcola la tua fee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-full sm:w-1/3 md:w-4/12 flex justify-center items-center">
            <img src={HeroImg} alt="Acme Corp" className="w-full mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

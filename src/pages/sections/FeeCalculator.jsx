import Coin1 from "../../assets/coin_1.png";
import Coin2 from "../../assets/coin_2.png";
import Coin3 from "../../assets/coin_3.png";

export default function FeeCalculator() {
  return (
    <>
      <div className="fee-calculator">
        <div className="container mx-auto py-24">
          <h2 className="h2 text-center">Calcola la tua fee</h2>
          <div className="py-20">
            <ul className="flex flex-row items-center gap-16">
              <li className="w-1/3 text-center flex items-center gap-4">
                <img src={Coin1} alt="counter 1" className="mx-auto mb-8" />
                <p className="subtitle1">
                  Inserisci l’ammontare del tuo patrimonio in criptovalute
                </p>
              </li>
              <li className="w-1/3 text-center flex items-center gap-4">
                <img src={Coin2} alt="counter 2" className="mx-auto mb-8" />
                <p className="subtitle1">Scopri la tua fee mensile</p>
              </li>
              <li className="w-1/3 text-center flex items-center gap-4">
                <img src={Coin3} alt="counter 3" className="mx-auto mb-8" />
                <p className="subtitle1">
                  Apri il conto e godi di tutti i vantaggi
                </p>
              </li>
            </ul>
          </div>
          <div className="calculator mx-auto p-12 text-center ">
            <h6 className="h6 title">Inserisci gli asset che vuoi custodire</h6>
            <input type="text" placeholder="Asset" />
            <button className="btn btn--primary mx-auto">Calcola</button>
            {/* ====================== where to put the result ======================= */}
            <p className="accent1 mt-24">--,--€</p>
            {/* ====================== where to put the result ======================= */}
            <a
              className="details-link"
              href=""
              onClick={(e) => {
                e.preventDefault();
                alert("Coming soon");
              }}
            >
              Dettagli del calcolo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

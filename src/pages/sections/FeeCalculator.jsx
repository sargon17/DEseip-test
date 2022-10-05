import { useState } from "react";

import Coin1 from "../../assets/coin_1.png";
import Coin2 from "../../assets/coin_2.png";
import Coin3 from "../../assets/coin_3.png";

export default function FeeCalculator() {
  const [fee, setFee] = useState(0);
  const [amount, setAmount] = useState("");
  let euroEURFormat = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  const fees = [
    {
      val: 500000,
      fee: 0.007,
    },
    {
      val: 500000,
      fee: 0.006,
    },
    {
      val: 4000000,
      fee: 0.005,
    },
    {
      val: 5000000,
      fee: 0.004,
    },
    {
      val: 0,
      fee: 0.003,
    },
  ];

  const calcFee = (total) => {
    // check for minimum amount of import
    if (total < 15000) {
      return null;
    }

    let yearlyFee = 0;
    for (let i = 0; i < fees.length; i++) {
      // check for the latest fee step
      if (i === fees.length - 1 && total > 0) {
        yearlyFee += total * fees[i].fee;
        break;
      }

      if (total >= fees[i].val) {
        yearlyFee += fees[i].fee * fees[i].val;
        total -= fees[i].val;
      } else if (total > 0 && total < fees[i].val) {
        yearlyFee += total * fees[i].fee;
        break;
      }
    }
    let monthlyFee = yearlyFee / 12;
    // console.log(monthlyFee);
    setFee(monthlyFee);
  };

  // calcFee(499999);

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
          <div className="calculator mx-auto p-12 text-center">
            <h6 className="h6 title">Inserisci gli asset che vuoi custodire</h6>
            <input
              type="text"
              placeholder="Asset"
              value={amount}
              onChange={(e) => {
                let val = e.target.value;
                setAmount(val);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  calcFee(amount);
                }
              }}
            />
            <button
              className="btn btn--primary mx-auto"
              onClick={() => {
                calcFee(amount);
              }}
            >
              Calcola
            </button>
            {/* ====================== where to put the result ======================= */}
            <p className="accent1 mt-24">
              {" "}
              {fee !== 0 ? euroEURFormat.format(fee) : "--,--€"}
            </p>
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
            {fee !== 0 && (
              <>
                <h5 className="h5 w-2/3 mx-auto mt-24">
                  Prova il servizio di custodia Acme Corp: non potrai più farne
                  a meno.
                </h5>
                <div className="flex justify-center gap-11 mt-16 mb-36">
                  <button className="btn btn--secondary">parla con noi</button>
                  <button className="btn btn--primary">apri un conto</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

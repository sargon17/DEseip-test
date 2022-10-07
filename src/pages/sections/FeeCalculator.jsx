import { useState } from "react";

// Components
import OverlayCard from "../../components/OverlayCard";

import Coin1 from "../../assets/coin_1.png";
import Coin2 from "../../assets/coin_2.png";
import Coin3 from "../../assets/coin_3.png";

export default function FeeCalculator() {
  const [fee, setFee] = useState(0);
  const [amount, setAmount] = useState("");

  // state of error message
  const [isAmountValid, setIsAmountValid] = useState(true);

  // state of table overlay
  const [isTableOpen, setIsTableOpen] = useState(false);

  // state of minimum amount overlay
  const [isMinAmountOpen, setIsMinAmountOpen] = useState(false);

  // formatting the amount to euro
  let euroEURFormat = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  // fees list
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

  // function to calculate the fee
  const calcFee = (total) => {
    // check for minimum amount of import
    if (total < 15000) {
      setIsMinAmountOpen(true);
      return;
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

    setFee(monthlyFee);
  };

  // utility function to check if the input is a number
  const inputValidation = (e) => {
    const re = /[0-9]*[^A-z]/;
    if (e.target.value === "" || re.test(e.target.value)) {
      let val = re.exec(e.target.value);
      if (val) {
        setAmount(val[0]);
      } else {
        setAmount("");
      }
      setIsAmountValid(true);
    } else {
      // console.log(e.target.value);
      setIsAmountValid(false);
    }
  };

  return (
    <>
      <div className="fee-calculator">
        <div className="container mx-auto py-24">
          <h2 className="h2 text-center">Calcola la tua fee</h2>
          <div className="py-20">
            <ul className="flex flex-row justify-center items-baseline flex-wrap">
              <li className="w-full xl:w-1/3 px-8 xl:text-center flex items-center justify-start gap-3 mb-8">
                <img src={Coin1} alt="counter 1" className="xl:mx-auto" />
                <p className="subtitle1">
                  Inserisci l’ammontare del tuo patrimonio in criptovalute
                </p>
              </li>
              <li className="w-full xl:w-1/3 px-8 xl:text-center flex items-center justify-start gap-3 mb-8">
                <img src={Coin2} alt="counter 2" className="xl:mx-auto " />

                <p className="subtitle1">Scopri la tua fee mensile</p>
              </li>
              <li className="w-full xl:w-1/3 px-8 xl:text-center flex items-center justify-start gap-3 mb-8">
                <img src={Coin3} alt="counter 3" className="xl:mx-auto " />
                <p className="subtitle1">
                  Apri il conto e godi di tutti i vantaggi
                </p>
              </li>
            </ul>
          </div>
          <div className="calculator mx-auto p-12 text-center">
            <h6 className="h6 title">Inserisci gli asset che vuoi custodire</h6>
            <div className="input-block">
              <input
                type="text"
                placeholder="Asset"
                value={amount}
                onChange={(e) => {
                  inputValidation(e);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    calcFee(amount);
                  }
                }}
              />
              {!isAmountValid && (
                <p className="error-message">
                  {" "}
                  Il valore deve essere un numero valido
                </p>
              )}
            </div>
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
                // alert("Coming soon");
                setIsTableOpen(true);
              }}
            >
              Dettagli del calcolo
            </a>
            {fee !== 0 && (
              <>
                <h5 className="h5 w-11/12 lg:w-2/3 mx-auto mt-24">
                  Prova il servizio di custodia Acme Corp: non potrai più farne
                  a meno.
                </h5>
                <div className="flex justify-center flex-wrap gap-11 mt-16 mb-36">
                  <button className="btn btn--secondary">parla con noi</button>
                  <button className="btn btn--primary">apri un conto</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {isTableOpen && (
        <OverlayCard
          close={() => {
            setIsTableOpen(false);
          }}
        >
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="body2">Da €</th>
                <th className="body2">A €</th>
                <th className="body2 text-center">
                  Commissioni annuali (IVA inclusa) <br />
                  <span className="body4 leading-none m-0">
                    Le commissioni mensili (IVA inclusa) sono 1/12 di quelle
                    annuali
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="body2">Primi 500,000</td>
                <td className="body2 text-center">15,000</td>
                <td className="body2 text-center">500,000</td>
                <td className="body2 text-center">0,70%</td>
              </tr>
              <tr>
                <td className="body2">Primi 500,000</td>
                <td className="body2 text-center">500,000</td>
                <td className="body2 text-center">1,000,000</td>
                <td className="body2 text-center">0,60%</td>
              </tr>
              <tr>
                <td className="body2">Primi 500,000</td>
                <td className="body2 text-center">1,000,000</td>
                <td className="body2 text-center">5,000,000</td>
                <td className="body2 text-center">0,50%</td>
              </tr>
              <tr>
                <td className="body2">Primi 500,000</td>
                <td className="body2 text-center">5,000,000</td>
                <td className="body2 text-center">10,000,000</td>
                <td className="body2 text-center">0,40%</td>
              </tr>
              <tr>
                <td className="body2">Primi 500,000</td>
                <td className="body2 text-center">10,000,000</td>
                <td className="body2 text-center">Moon</td>
                <td className="body2 text-center">0,30%</td>
              </tr>
            </tbody>
          </table>
        </OverlayCard>
      )}
      {isMinAmountOpen && (
        <OverlayCard
          close={() => setIsMinAmountOpen(false)}
          cardClass="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
          variant="clear"
        >
          <p className="body2 text-center mx-auto">
            Ci dispiace, al momento il nostro servizio è disponibile solo a
            partire da €15.000
          </p>
        </OverlayCard>
      )}
    </>
  );
}

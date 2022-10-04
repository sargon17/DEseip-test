import messages from "./../../assets/messages.svg";
import esecutore from "./../../assets/esecutore.svg";
import buildings from "./../../assets/buildings.svg";
import hands from "./../../assets/hands.svg";
import generations from "./../../assets/generations.svg";

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="container mx-auto py-24">
          <h2 className="h2 text-center">
            Tanti servizi tutti inclusi nella custodia
          </h2>
          <div className="py-20">
            <ul className="flex flex-row flex-wrap items-baseline justify-center">
              <li className="w-4/12 text-center gap-4">
                <img src={messages} alt="messages" className="mx-auto mb-8" />
                <p className="body1">Gestore dedicato</p>
              </li>
              <li className="w-4/12 text-center  gap-4">
                <img src={esecutore} alt="messages" className="mx-auto mb-8" />
                <p className="body1">Nomina di un esecutore</p>
              </li>
              <li className="w-4/12 text-center  gap-4">
                <img src={buildings} alt="messages" className="mx-auto mb-8" />
                <p className="body1">
                  Apertura di rapporti intestati a società e fiduciarie
                </p>
              </li>
              <li className="w-4/12 text-center  gap-4">
                <img src={hands} alt="messages" className="mx-auto mb-8" />
                <p className="body1">Apertura di rapporti cointestati</p>
              </li>
              <li className="w-4/12 text-center  gap-4">
                <img
                  src={generations}
                  alt="messages"
                  className="mx-auto mb-8"
                />
                <p className="body1">Passaggio generazionale</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

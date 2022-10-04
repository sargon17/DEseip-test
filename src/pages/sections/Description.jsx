import Protocol from "../../assets/protocollo.png";
import Gestore from "../../assets/gestore.png";
import Oiz from "../../assets/oiz.png";
import assicuration from "../../assets/assicuration.png";

export default function Description() {
  return (
    <>
      <div className="ACME_description">
        <div className="container mx-auto py-24">
          <h2 className="h2 text-center">
            Cosa rende sicura e affidabile la custodia di Acme Corp:
          </h2>
          <div className="py-20">
            <ul className="flex flex-row items-baseline gap-16">
              <li className="w-1/4 text-center block">
                <img
                  src={Protocol}
                  alt="image of a shield"
                  className="mx-auto mb-8"
                />
                <h3 className="h3 uppercase">PROTOCOLLO DI CUSTODIA</h3>
                <p className="subtitle1">
                  ll nostro protocollo di custodia è basato su due livelli cold
                  storage, tre stadi autorizzativi a firma multipla e 5 aziende
                  indipendenti coinvolte
                </p>
              </li>
              <li className="w-1/4 text-center block">
                <img
                  src={Gestore}
                  alt="vector of a person"
                  className="mx-auto mb-8"
                />
                <h3 className="h3 uppercase">Gestore dedicato</h3>
                <p className="subtitle1">
                  Hai a tua totale disposizione un gestore dedicato raggungibile
                  via email, chat, telefono e di persona
                </p>
              </li>
              <li className="w-1/4 text-center block">
                <img
                  src={Oiz}
                  alt="image of a shields"
                  className="mx-auto mb-8"
                />
                <h3 className="h3 uppercase">Attestazioni OIZ</h3>
                <p className="subtitle1">
                  Acme Corp si sottopone ad audit esterno e possiede numerose
                  attestazioni di livello
                </p>
              </li>
              <li className="w-1/4 text-center block">
                <img
                  src={assicuration}
                  alt="vector of a safe"
                  className="mx-auto mb-8"
                />
                <h3 className="h3 uppercase">Coperture assicurative</h3>
                <p className="subtitle1">
                  Qualsiasi cosa accada, la copertura assicurativa garantisce il
                  totale rimborso del patrimonio
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { FormEvent, useState } from "react";

export default function RSVP() {

  const [sent, setSent] = useState(false);

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setSent(true);
  };


  if (sent) {
    return (
      <section className="premium-rsvp success-rsvp">

        <div className="rsvp-flower">
          ❧
        </div>

        <div className="success-circle">
          ✓
        </div>

        <h2>
          Faleminderit!
        </h2>

        <p>
          Pjesëmarrja juaj u konfirmua.
        </p>

        <span className="success-heart">
          ♥
        </span>

      </section>
    );
  }


  return (
    <section className="premium-rsvp">

      <div className="rsvp-flower">
        ❧
      </div>

    

    

      <div className="heart-divider">
        <span></span>
        <b>♥</b>
        <span></span>
      </div>

      <p className="rsvp-description">
        Ju lutemi konfirmoni
        <br />
        pjesëmarrjen tuaj
      </p>


      <form onSubmit={handleSubmit}>

        <input
          required
          type="text"
          placeholder="Emri dhe mbiemri"
        />


        <select required defaultValue="">

          <option
            value=""
            disabled
          >
            Numri i personave
          </option>

          <option value="1">
            1 person
          </option>

          <option value="2">
            2 persona
          </option>

          <option value="3">
            3 persona
          </option>

          <option value="4">
            4 persona
          </option>

        </select>


        <select required defaultValue="">

          <option
            value=""
            disabled
          >
            A do të merrni pjesë?
          </option>

          <option value="yes">
            Po, do të marr pjesë
          </option>

          <option value="no">
            Nuk mund të marr pjesë
          </option>

        </select>


        <button type="submit">
          KONFIRMO
        </button>

      </form>

    </section>
  );
}
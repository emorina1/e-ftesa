import EventDetails from "./EventDetails";
import RSVP from "./RSVP";

export default function Invitation() {
  return (
    <main className="wedding-invitation">

      {/* =========================
          YOU'RE INVITED
      ========================== */}
      <section className="invited-section">

  

        <div className="invited-content">

          <p className="youre">YOU'RE</p>

          

          <p className="invited">
            INVITED
          </p>

          <div className="heart-divider">
            <span></span>
            <b>♥</b>
            <span></span>
          </div>

          <p className="celebrate-text">
            TO CELEBRATE
            <br />
            OUR WEDDING
          </p>

          <h2 className="couple-names">
            Leart
            <i>&</i>
            Sara
          </h2>

          <p className="wedding-date">
            07 • 10 • 2027
          </p>

        </div>

      </section>
{/* =========================
    SCROLL SECTION
========================== */}
<section className="scroll-hint">

  <p>
    Historia jonë vazhdon...
  </p>

  <span>⌄</span>

</section>

      {/* =========================
          VIDEO
      ========================== */}
      <section className="love-story-section">

       <video
  className="love-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src="/video.mp4"
    type="video/mp4"
  />

  Browseri juaj nuk e mbështet videon.
</video>
   

        <div className="video-overlay"></div>

        <div className="video-flowers flower-video-top">
         
        </div>

        <div className="video-flowers flower-video-bottom">
          
        </div>

        <div className="love-story-text">

          <span className="tiny-heart">♥</span>

          <h2>
            Dy zemra,
            <br />
            një rrugëtim
          </h2>

          <div className="small-line"></div>

          <p>
            Bashkohu me ne për të festuar
            fillimin e kapitullit tonë më të bukur.
          </p>

        </div>

      </section>


      {/* =========================
          DATA
      ========================== */}
      <section className="date-section">

        

        <p className="small-title">
          BASHKOHU ME NE PËR
          <br />
          NJË DITË TË VEÇANTË
        </p>

        <div className="heart-divider">
          <span></span>
          <b>♥</b>
          <span></span>
        </div>

        <p className="day-name">
          E DIEL
        </p>

        <h2 className="big-date">
          07
        </h2>

        <p className="month">
          Tetor
        </p>

        <p className="year">
          2027
        </p>

        <div className="heart-divider">
          <span></span>
          <b>♥</b>
          <span></span>
        </div>

        <p className="event-time">
          ORA 19:00
        </p>

      </section>


      {/* Detajet */}
      <EventDetails />


      {/* =========================
          QUOTE
      ========================== */}
      <section className="final-love-section">

        <div className="final-love-content">
         
          <p>
            Dy zemra,
          </p>

          <h2>
            një rrugëtim dhe
            <br />
            një fillim i ri.
          </h2>

          <span>♥</span>

        </div>

      </section>


      {/* RSVP */}
      <RSVP />


      <footer className="wedding-footer">
        <p>Leart & Sara</p>

        <span>
          07 • 10 • 2027
        </span>
      </footer>

    </main>
  );
}
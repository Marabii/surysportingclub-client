import React from "react";
import "./Contact.css";
import Header from "../../components/Header/Header";
import { Phone, Mail, Locate, Facebook } from "lucide-react";

import background from "/background10.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <img src={background} className="background-contact" />
      <Header />
      <h1>Contact</h1>
      <div className="contact-info">
        <div>
          <Phone className="icon-contact" />
          <h2>+33 678 910 123</h2>
        </div>

        <div>
          <a href="mailto:SurySportingC1ub.SSC@gmai1.com">
            <Mail className="icon-contact" />
            <h2>SurySportingC1ub.SSC@gmai1.com</h2>
          </a>
        </div>

        <div>
          <a href="https://maps.app.goo.gl/7XVLZu4vHBPeJioo8">
            <Locate className="icon-contact" />
            <h2>
              <p>Stade de la Devalla</p>
              <p>447 Route de la Devalla,</p>
              <p>42450 Sury-le-Comtal</p>
            </h2>
          </a>
        </div>

        <div>
          <a href="https://www.facebook.com/profile.php?id=100057662790427">
            <Facebook className="icon-contact" />
            <h2>Suivez-nous sur Facebook!</h2>
          </a>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22355.32595914552!2d4.136684874316406!3d45.54196159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f44be45532c0f3%3A0x6fbd2d5719d0b11f!2sStade%20de%20foot!5e0!3m2!1sen!2sfr!4v1714764057389!5m2!1sen!2sfr"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

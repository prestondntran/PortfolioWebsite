import React from "react";
import aws from './images/AWSCloudPractitioner.png';
import ibm from './images/IBMDataCert.png';
import nyu from './images/NYUC++Cert.png';

export default function Certificates() {
  return (
    <section class="certificates" id="certificates">
      <h2 class="certificates-title">Certificates</h2>
      <center>
        <div class="certificates-container">
          <div class="certificate-container certificate-card">
            <img
              src={aws}
              alt="aws-cert"
              loading="lazy"
              class="certificate-pic"
            />
            <h3 class="certificate-title">AWS Certified Cloud Practitioner</h3>
          </div>
          <div class="certificate-container certificate-card">
            <img
              src={ibm}
              alt="ibm-cert"
              loading="lazy"
              class="certificate-pic"
            />
            <h3 class="certificate-title">IBM Data Science Certificate</h3>
          </div>
          <div class="certificate-container certificate-card">
            <img
              src={nyu}
              alt="nyu-cert"
              loading="lazy"
              class="certificate-pic"
            />
            <h3 class="certificate-title">NYU Advanced C++ Certificate</h3>
          </div>
        </div>
      </center>
    </section>
  );
}
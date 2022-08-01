import React from "react";
import Footer from "../components/Footer";
import { AiFillLinkedin } from "react-icons/ai";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <div
            style={{
              marginTop: "50px",
              marginLeft: "2px",
            }}
          >
            <a>
              <img
                src={require("../images/image.png")}
                alt="cover"
                height={152}
                width={300}
              />
            </a>
            <div>
              <Footer.Title>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  © 2021 SynergyLabs, LLC. All rights reserved.
                </span>
              </Footer.Title>
            </div>

            <Footer.Link href="#">
              <span>
                <AiFillLinkedin style={{ fontSize: "45px" }} />
              </span>
            </Footer.Link>
          </div>

          <Footer.Column>
            <Footer.Title>Download</Footer.Title>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="/products">Products</Footer.Link>
            <Footer.Link href="/services">Solutions</Footer.Link>
            <Footer.Link href="/resources">Resources</Footer.Link>
            <Footer.Link href="/contact">Contact Us</Footer.Link>
            <Footer.Link href="/career">Careers</Footer.Link>
            <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Case Studies</Footer.Title>
            <Footer.Link href="/supply-chain-and-logistics">
              Supply Chain and Logistics
            </Footer.Link>
            <Footer.Link href="/retail-and-wholesale">
              Retail and WholeSale House
            </Footer.Link>
            <Footer.Link href="/electricvehicles">
              Electric & Autonomous Mobility
            </Footer.Link>
            <Footer.Link href="/edtech">Edtech</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Gallery</Footer.Title>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1rem",
              }}
            >
              <Footer.Link href="#">
                <img
                  src={require("../images/synLabs.jpg")}
                  alt="cover"
                  height={60}
                  width={50}
                />
              </Footer.Link>
              <Footer.Link href="#">
                <img
                  src={require("../images/synLabs.jpg")}
                  alt="cover"
                  height={60}
                  width={50}
                />
              </Footer.Link>
              <Footer.Link href="#">
                <img
                  src={require("../images/synLabs.jpg")}
                  alt="cover"
                  height={60}
                  width={50}
                />
              </Footer.Link>
              <Footer.Link href="#">
                <img
                  src={require("../images/synLabs.jpg")}
                  alt="cover"
                  height={60}
                  width={50}
                />
              </Footer.Link>
              <Footer.Link href="#">
                <img
                  src={require("../images/synLabs.jpg")}
                  alt="cover"
                  height={60}
                  width={50}
                />
              </Footer.Link>
              <Footer.Link href="#">
                <img
                  src={require("../images/synLabs.jpg")}
                  alt="cover"
                  height={60}
                  width={50}
                />
              </Footer.Link>
            </div>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}

import pagesStyle from "../../pages/Pages.module.css";
import styles from "./AboutUs.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <main className={pagesStyle.mainContent}>
          <div className={styles.container}>
            <h2>StopD_About Us</h2>

            <p>
              StopD is a community-driven platform fighting against unjust
              evictions. So, U R more than welcome to StopD, a community-driven
              platform fighting against unjust evictions. Created by StopD
              community who believe housing is a fundamental right, StopD
              empowers tenants and activists to organize, share information, and
              build solidarity against displacement.
              <br></br>
              <h5>
                We're more than an a simple app - we're a movement that stands
                with vulnerable communities facing housing insecurity.
              </h5>
              <br></br>
              <h5>And yes, we need U!</h5>
            </p>

            <h3>Our Features</h3>
            <ul>
              <p>
                Case Tracking: Monitor active eviction cases in your
                neighborhood with real-time updates.
              </p>
              <p>
                Community Support: Join others in standing against unjust
                evictions through our attendance system.
              </p>
              <p>
                Regional Alerts: Get notified about upcoming eviction hearings
                in your area.
              </p>
              <p>
                Tenant Resources: Access legal information and community support
                networks.
              </p>
            </ul>

            <h3>Our Mission</h3>

            <p>
              StopD was born from several saturday-night coding sessions and
              frontline activism!. We believe that technology could amplify
              grassroots housing justice efforts. We realized that while many
              face eviction, few have the tools to organize effective
              resistance. StopD bridges this gap by combining technical
              solutions with community organizing principles. We believe
              everyone deserves stable housing and the power to fight back
              against displacement.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

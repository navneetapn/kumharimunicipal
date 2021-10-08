import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'


export default function About() {
    
    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About Us" />
                <section className="sectionBlock py-5">
                    <Container>
                    <p>Kumhari is a city located in the Indian state of Chhattisgarh. It comes under the Durg district. It is situated at 21°27'N 81°52' and has an average elevation of 284 meters above the sea level.</p>

                    <p>Kumhari is located in Dhamdha tehsil of Durg district in the Indian state of Chhattisgarh. Kumhari is a Nagar Palika Parishad and situated at Durg district and Raipur district border beside Karun River.</p>

                    <p>The nearest city to Kumhari in Durg is Bhilai. It is situated at a distance of 5.5 nm towards the west of the Kumhari city. Raipur, the capital city of the state is located towards the east of this Chhattisgarh city. Kumhari's distance from Raipur is about 6.8 nm. The other nearby towns are Jamul and Banbarad situated towards the west of the Kumhari city of Durg. While its distance from the town of Jamul is 6.6 nm, Banbarad is situated 9 nm away from the city of Kumhari. Towards the north of the Kumhari city are the towns of Dharsinwa and Kusmi situated at a distance of 11.7 nm and 15 nm respectively. The city of Mandhar in Raipur district is situated at a distance of 10.6 nm towards the east of the city of Kumhari. The city of Patan is situated 14 nm away towards the south of Kumhari, Chhattisgarh.</p>

                    <p>The nearest airport to this Chhattisgarh city is the one located in [Raipur] Swami Vivekanand airport.</p>
                    </Container>
                </section>
            <Footer />
        </>
    )
    
}
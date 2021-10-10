import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'


export default function Socialgeological() {

    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About / Social and Geological of Kumhari" />
            <section className="sectionBlock py-5">
                <Container>
                    <h3>Geography</h3>
                    <p>Kumhari is located at 21.27°N 81.52°E.[1] It has an average elevation of 285 metres (935 feet). Area: 36.9 km2 Density: 949.7 inh./km2</p>
                    
                    <h3>Demographics</h3>
                    <p>Kumhari is divided into 24 wards. Kumhari municipal corporation had controlled Kumhari town and also controlled 5 villages named Kugda, Rampur, Janjgiri, Parsada, Pahanda. As of 2011 India census,[2] Kumhari had a population of 45000. Males constitute 52% of the population and females 48%. Kumhari has an average literacy rate of 63%, higher than the national average of 59.5%: male literacy is 71%, and female literacy is 54%. In Kumhari, 16% of the population is under 6 years of age.</p>

                    <h3>Places of interest</h3>
                    <ul>
                        <li><strong>Kevalya Dham:</strong> Jain temple of white marble is on NH 6 and is a place of tourist attraction. Kevalya Dham is a popular Jain tourist pilgrim attraction located in Kumhari town. The temple is also known as Sri Adinath Jain Shwetambar Tirth collection of 26 small and big Jain temples magnificently built with marbles. The temple enshrines the idols of all 24 Tirthankars in small temples with one large temple complex with idol of Rishabhdev. On the corner wall within the shrine carries a detailed description of Sri Shatrunjay Maha Tirtha.</li>
                        <li><strong>Mahamaya Temple:</strong> There is an old temple of goddess Mahamaya.The beautiful Maa Mahamaya Devi Mandir in Kumhari town is another popular religious attraction. Tourists and devotees from near and far off places visit this temple to offer prayers and seek goddess Mahamaya's blessings.</li>
                        <li><strong>Kharun River:</strong> Kharun River is a tributary of Shivnath river that empties into Mahanadi river.</li>
                        <li><strong>Sai Dham:</strong> Sai dham is shridi sai baba temple located at NH 6 Kumhari.</li>
                        <li><strong>Durga Maidan</strong> Durga Maidan situated in badi colony or ward no 15 has many new things to explore around. There is sahni mandir and during navratri many across charoda and in radius of kumhari come here to play garba and dandiya and many competition are being held in area.</li>
                        </ul>
                </Container>
            </section>
            <Footer />
        </>
    )

}
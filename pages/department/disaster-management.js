import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Image from 'next/image'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import DM1 from '../../public/department/disaster/DM1.jpg'
import DM2 from '../../public/department/disaster/DM2.jpg'
import DM3 from '../../public/department/disaster/DM3.jpg'
import DM4 from '../../public/department/disaster/DM4.jpg'
import DM5 from '../../public/department/disaster/DM5.jpg'
import DM6 from '../../public/department/disaster/DM6.jpg'
import DM7 from '../../public/department/disaster/DM7.jpg'
import DM8 from '../../public/department/disaster/DM8.jpg'
import DM9 from '../../public/department/disaster/DM9.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";


export default function Disastermanagement() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Disaster Management | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Department / Disaster Management" />
            <section className="sectionBlock py-5">
                <Container className="text-center">
                        <Image src={DM1} alt="DM1"/>
                        <Image src={DM2} alt="DM2"/>
                        <Image src={DM3} alt="DM3"/>
                        <Image src={DM4} alt="DM4"/>
                        <Image src={DM5} alt="DM5"/>
                        <Image src={DM6} alt="DM6"/>
                        <Image src={DM7} alt="DM7"/>
                        <Image src={DM8} alt="DM8"/>
                        <Image src={DM9} alt="DM9"/>
                </Container>
            </section>
            <Footer />
        </>
    )

}
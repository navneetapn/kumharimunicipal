import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import map from '../../public/about/map.jpg';
import Image from 'next/image'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'

export default function Wardinformation() {

    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About / Ward of information" />
            <section className="sectionBlock py-5">
                <Container>
                    <Image src={map} alt="Korba Map" />
                </Container>
            </section>
            <Footer />
        </>
    )

}
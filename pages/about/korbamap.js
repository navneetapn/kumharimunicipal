import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import map from '../../public/about/map.jpg';
import Image from 'next/image'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'


export default function Korbamap() {

    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About / Kumhari Map" />
            <section className="sectionBlock py-5">
                <Container>
                    <Image src={map} alt="Kumhari Map" />
                </Container>
            </section>
            <Footer />
        </>
    )

}
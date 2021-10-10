import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";


export default function Leasetransfer() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lease Transfer | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Department / Lease Transfer" />
            <section className="sectionBlock py-5">
            <Container className="text-center py-5">
                   <div><h2>Information needs to be provided</h2></div>
                </Container>
            </section>
            <Footer />
        </>
    )

}
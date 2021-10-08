import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
export default function Disastermanagement() {

    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Department / Disaster Management" />
            <section className="sectionBlock py-5">
                <Container>
                    Under Construction
                </Container>
            </section>
            <Footer />
        </>
    )

}
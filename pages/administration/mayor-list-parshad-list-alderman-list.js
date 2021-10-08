import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'

export default function Mayorlistparshadlistaldermanlist() {
    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Administration / Mayor List, Parshad List, Alderman-List" />
            <section className="sectionBlock py-5">
                <Container>
                    Information needs to be provided
                </Container>
            </section>
            <Footer />
        </>
    )

}
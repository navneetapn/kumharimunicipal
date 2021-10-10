import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";


export default function Mayorlistparshadlistaldermanlist() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mayor List Parshad List Alderman List | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Administration / Mayor List, Parshad List, Alderman-List" />
            <section className="sectionBlock py-5">
            <Container className="text-center py-5">
                   <div><h2>Information needs to be provided</h2></div>
                </Container>
            </section>
            <Footer />
        </>
    )

}
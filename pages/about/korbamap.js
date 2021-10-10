import React, {useEffect} from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import map from '../../public/about/map.jpg';
import Image from 'next/image'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";


export default function Korbamap() {
    useEffect(()=>{
        document.title = "home"
    })
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kumhari map | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About / Kumhari Map" />
            <section className="sectionBlock py-5">
                <Container className="text-center">
                    <Image src={map} alt="Kumhari Map" />
                </Container>
            </section>
            <Footer />
        </>
    )

}
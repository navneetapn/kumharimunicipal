import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";

export default function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [contactData, setcontactData] = useState([]);
    useEffect(() => {
        fetch("http://admin.kumharimunicipal.in/api/contact-us")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setcontactData(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
                <BreadCrumb banner={bannerBreadcrumbs} name="Contact Us" />
                <section className="py-5">
                <Container>
                    <Card className="py-2 mb-5 text-center">
                        <i className="fa-2x fa fa-phone"></i>
                        <p className="m-0 mt-2">{contactData.mobile}</p>
                    </Card>
                    <Card className="py-2 mb-5 text-center">
                        <i className="fa-2x fa fa-envelope-o"></i>
                        <p className="m-0 mt-2">{contactData.email}</p>
                    </Card>
                    <Card className="py-2 mb-5 text-center">
                        <i className="fa-2x fa fa-map-marker"></i>
                        <p className="m-0 mt-2">{contactData.address}</p>
                    </Card>
                </Container>
                </section>
            <Footer />
        </>
    )
}

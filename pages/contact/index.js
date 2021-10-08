import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'

export default function Contact() {
    return (
        <>
            <Header />
                <BreadCrumb banner={bannerBreadcrumbs} name="Contact Us" />
                <section className="py-5">
                <Container>
                    <Card className="py-2 mb-5 text-center">
                        <i className="fa-2x fa fa-phone"></i>
                        <p>98989999898</p>
                    </Card>
                    <Card className="py-2 mb-5 text-center">
                        <i className="fa-2x fa fa-envelope-o"></i>
                        <p>testmail@example.com</p>
                    </Card>
                    <Card className="py-2 mb-5 text-center">
                        <i className="fa-2x fa fa-map-marker"></i>
                        <p>Lorem, ipsum dolor sit, amet consectetur adipisicing eli</p>
                    </Card>
                </Container>
                </section>
            <Footer />
        </>
    )
}

import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";

export default function Organisationstructure() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Organisation Structure | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Administration / Organisation Structure" />
            <section className="sectionBlock py-5">
                <Container>
                    <div className="table-responsive">
                        <table className="table table-hover table-lg table-bordered table-striped">
                            <thead className="all-text-white bg-grad">
                                <tr>
                                    <td colSpan="5" className="bg-primary text-light text-center"><strong>आयुक्त</strong></td>
                                </tr>
                                <tr>
                                    <td colSpan="5" className="bg-primary text-light text-center"><strong>अपर आयुक्त</strong></td>
                                </tr>
                                <tr className="bg-primary text-light">
                                    <td><strong>अधीक्षण अभियंता</strong></td>
                                    <td><strong>उपायुक्त</strong></td>
                                    <td><strong>लेखाधिकारी</strong></td>
                                    <td><strong>स्वास्थ अधिकारी</strong></td>
                                    <td><strong>राजस्व अधिकारी
                                        <br/>
                                        <small>(सम्पतिकर)</small></strong></td>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>• जोन कमिश्नार<br/>
                                        <small>(कार्यपालन अभियंता)<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;• सहायक अभियंता<br/>
                                                &nbsp;&nbsp;&nbsp;&nbsp;• उपअभियन्ता</small></td>
                                            <td>• सम्पदा<br/>
                                                <small>&nbsp; &nbsp; &nbsp; &nbsp; • दुकान
                                                <br/>
                                                &nbsp; &nbsp; &nbsp; &nbsp; • भूखंड</small></td>
                                            <td>• वित्त</td>
                                            <td>• स्वछता विभाग</td>
                                            <td>• समस्त जोन उप प्रभारी</td>
                                        </tr>
                                        <tr>
                                            <td>• डाटा सेंटर</td>
                                            <td>• पेंशन</td>
                                            <td>• स्थापना
                                                <br/>
                                                <small>&nbsp; &nbsp; &nbsp; &nbsp; • शिक्षा</small></td>
                                            <td>• जन्म मृत्यु विवाह
                                                <br/>
                                                रजिस्ट्रार</td>
                                            <td>• राजस्व अधिकारी</td>
                                        </tr>
                                        <tr>
                                            <td>• विद्युत् शाखा</td>
                                            <td>• NULM</td>
                                            <td>• स्टेशनरी</td>
                                            <td></td>
                                            <td>• राजस्व निरीक्षक</td>
                                        </tr>
                                        <tr>
                                            <td>• वाहन शाखा</td>
                                            <td></td>
                                            <td>• जनसंपर्क</td>
                                            <td></td>
                                            <td>• सहायक राजस्व निरीक्षक</td>
                                        </tr>
                                        <tr>
                                            <td>• जल आवर्धन</td>
                                            <td></td>
                                            <td>• उद्यान</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                </Container>
            </section>
            <Footer />
        </>
    )

}
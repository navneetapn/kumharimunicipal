import React, { useEffect, useState } from 'react'
import { Container, Table, Button,Row,Col, Placeholder, Alert} from 'react-bootstrap'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";

export default function Tender() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tenderData, setTenderData] = useState([]);
    const [basePath, setBasepath] = useState([]);
    useEffect(() => {
        setBasepath(window.location.origin);
    }, []);
    useEffect(() => {
        fetch("http://admin.kumharimunicipal.in/api/tenders")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTenderData(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
    if (error) {
        return (
        <>
                <>  <Header />
                    <Container>
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        </Alert>
                    </Container>
                    <Footer />
                </>
        </>);
    } else if (!isLoaded) {
        return (
            <> <>
                 <Header />
                    <Container className="py-5">
                        <Placeholder xs={12} size="lg" />
                        <Placeholder xs={12} />
                        <Placeholder xs={12} size="sm" />
                        <Placeholder xs={12} size="xs" />
                        <Placeholder xs={12} size="lg" />
                        <Placeholder xs={12} />
                        <Placeholder xs={12} size="sm" />
                        <Placeholder xs={12} size="xs" />
                        <Placeholder xs={12} size="lg" />
                        <Placeholder xs={12} />
                        <Placeholder xs={12} size="sm" />
                        <Placeholder xs={12} size="xs" />
                        <Placeholder xs={12} size="lg" />
                        <Placeholder xs={12} />
                        <Placeholder xs={12} size="sm" />
                        <Placeholder xs={12} size="xs" />
                    </Container>
                    <Footer />
                </>
            </>);
    } else {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tender | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Tender" />
            <section className="bg-light tenderWrapper">
                <Container className="py-5">
                    <h3 className="text-center my-5"> For Downloads</h3>
                    <div className="row tenderFormLink">
                       <div className="col-2">
                           <a href={basePath + "/docs/FormA.pdf"} title="Form A" target="_blank">1. Form A</a>
                       </div>
                       <div className="col-2">
                          <a href={basePath + "/docs/FormB.pdf"} title="Form B" target="_blank">2. Form B</a>
                       </div>
                       <div className="col-5">
                          <a href={basePath + "/docs/PQ more than 3 crores upto 10 crores.pdf"} title="" target="_blank">3. PQ more than 3 crores upto 10 crores</a>
                       </div>
                       <div className="col-3">
                           <a href={basePath + "/docs/PQ more than 10 crores.pdf"} title="" target="_blank">4. PQ more than 10 crores</a>
                       </div>
                    </div>
                    <Table responsive bordered>
                        <thead className="text-white bg-primary">
                            <tr>
                                <th>Sr No</th>
                                <th>Tender Subject</th>
                                <th>Dates</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                 {
                                    tenderData.map((el, idx) => (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{el.title}</td>
                                            <td>{el.created_at}</td>
                                            <td className="text-center"><a href={el.file}><Button className="align-center btn btn-primary"><i className="fa fa-download"></i></Button></a></td>
                                        </tr>
                                    ))
                                }
                        
                        </tbody>
                    </Table>
                </Container>
            </section>
            <Footer />
        </>
    )
    }
}

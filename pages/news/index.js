import React, { useEffect, useState } from 'react'
import { Container, Table, Button,Row,Col, Placeholder, Alert} from 'react-bootstrap'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import banner from '../../public/banners/banner.webp'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";


export default function News() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [newsData, setNewsData] = useState([]);
        
    useEffect(() => {
        fetch("http://admin.kumharimunicipal.in/api/news")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setNewsData(result.data);
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
            <>
                <>
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
                <title>News | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="News" />
            <section className="bg-light tenderWrapper">
                <Container className="py-5">
                    <h3 className="text-center my-5"> For Downloads</h3>
                    <Table responsive bordered>
                        <thead className="text-white bg-primary">
                            <tr>
                                <th>Sr No</th>
                                <th>News Subject</th>
                                <th>Dates</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                 {
                                    newsData.map((el, idx) => (
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

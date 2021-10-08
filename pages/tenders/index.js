import React, { useEffect, useState } from 'react'
import { Container, Table, Button,Row,Col, Placeholder, Alert} from 'react-bootstrap'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'


export default function Tender() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tenderData, setTenderData] = useState([]);
        
    useEffect(() => {
        fetch("https://classified-claylist.herokuapp.com/api/tenders")
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
            <>
                <>  <Header />
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
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Tender" />
            <section className="bg-light tenderWrapper">
                <Container className="py-5">
                    <h3 className="text-center my-5"> For Downloads</h3>
                    <Table responsive bordered>
                        <thead className="text-white">
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
                                            <td><a href={el.file}><Button className="align-center btn btn-primary"><i className="fa fa-download"></i></Button></a></td>
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

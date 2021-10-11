import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { SRLWrapper} from 'simple-react-lightbox';
import { Container, Table, Button,Row,Col, Placeholder, Alert} from 'react-bootstrap'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";

export default function Gallery() {
 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [galleryData, setGalleryData] = useState([]);
        
    useEffect(() => {
        fetch("http://admin.kumharimunicipal.in/api/gallery")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setGalleryData(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
    console.log(`galleryData`, galleryData)
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gallery | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Event Gallery" />
            <section className="bg-light py-5 galleryWrapper">
        
			<SRLWrapper>
				<div className="container">
					{galleryData.map(image => (
						<div key={image.id} className="image-card">
							<a href={`${image.image}`}>
								<img className="image" src={`${image.image}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
    
            </section>
            <Footer />
        </>
    )
                    }
}

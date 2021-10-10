import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';
import chhattisgarh from '../public/images/logos/1.png';
import uda from '../public/images/logos/2.png';
import amrit from '../public/images/logos/3.png';
import swachch from '../public/images/logos/4.png';
import daynulm from '../public/images/logos/5.png';
import digitalindia from '../public/images/logos/6.png';
import cpkorba from '../public/images/logos/7.png';
import sarvanglogo from '../public/images/logos/sarvanglogo.png';

export default function Footer() {
    const [basePath, setBasepath] = useState([]);
    useEffect(() => {
        setBasepath(window.location.origin);
    }, []);
    return (
        <footer className="footer">

            <div className="footerIcons bg-light">
                <Container>
                    <ul className="footerLogoList list-unstyled m-0">
                        <li className="">
                            <a href="https://www.chhattisgarhtourism.in/" target="_blank">
                                <Image src={chhattisgarh} alt="mygov" />
                            </a>
                        </li>
                        <li className="">
                            <a href="https://uad.cg.gov.in/" target="_blank">
                                <Image src={uda} alt="goi" />
                            </a>
                        </li>
                        <li className="">
                            <a href="http://amrut.gov.in/content/" target="_blank">
                                <Image src={amrit} alt="indiagob" />
                            </a>
                        </li>
                        <li className="">
                            <a href="http://www.swachhbharaturban.in/sbm/home/" target="_blank">
                                <Image src={swachch} alt="morthicon" />
                            </a>
                        </li>
                        <li className="">
                            <a href="https://nulm.gov.in/" target="_blank">
                                <Image src={daynulm} alt="nationalregister" />
                            </a>
                        </li>
                        <li className="">
                            <a href="https://www.digitalindia.gov.in/" target="_blank">
                                <Image src={digitalindia} alt="paidnrservices" />
                            </a>
                        </li>
                    </ul>
                </Container>
            </div>
            <div className="footerLinks py-2">
                <Container>
                    <ul className="footerLinksList list-unstyled m-0">
                        <li className="">
                            <a href="/">Home</a>
                        </li>
                        <li className="">
                            <a href={basePath + "/about"}>Introduction of Kumhari</a>
                        </li>
                        <li className="">
                            <a href="/about/korbamap">Kumhari Map</a>
                        </li>
                        <li className="">
                            <a href="/news">News &amp; Noticeboard</a>
                        </li>
                        <li className="">
                            <a href="/tenders">Tenders</a>
                        </li>
                        <li className="">
                            <a href="/gallery">Gallery</a>
                        </li>
                        <li className="">
                            <a href="/noticeboard">Noticeboard</a>
                        </li>
                        <li className="">
                            <a href={basePath + "/info-needed"}>Commissioner List</a>
                        </li>
                        <li className="">
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </Container>
            </div>
            <div className="bottomFooter py-4">
                <Container>
                    <Row className="g-4">
                        <Col className="col col-sm-12 col-md-12">
                            <div className="text-description text-light">
                                <div className="footer-content">
                                    <p>An official website of Kumhari Municipal Corporation</p>
                                    <p>Content on this website is published and managed by Kumhari Municipal Corporation</p>
                                    <p>Copyright © 2021. <a href="http://kumharimunicipal.in">kumharimunicipal.in</a> &nbsp;All Rights Reserved.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </footer >
    )
}

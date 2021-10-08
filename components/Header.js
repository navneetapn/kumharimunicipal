import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Head from "next/head";
import logo from '../public/images/logo.png';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'


export default function Header() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [basePath, setBasepath] = useState([]);
    const [settings, setsettings] = useState([]);
    useEffect(() => {
        setBasepath(window.location.origin);
    }, []);
    useEffect(() => {
        fetch("https://classified-claylist.herokuapp.com/api/settings")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setsettings(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
    return (
        <>  
            <Head>
                <title>{settings.site_name}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="py-2 topnavbar">
                <Container>
                    <Row className="g-4">
                        <Col className="col">
                            <p className="text-right m-0">
                                <a className="text-white mx-3"><i className="fa fa-phone"></i> {settings.mobile}</a>
                                <a className="text-white mx-3"><i className="fa fa-envelope-o"></i> {settings.email}</a>
                                <a className="text-white adminLogin" href={settings['admin-url']} target="_blank"><i className="fa fa-lock"></i> Admin Login</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar expand="lg" className="d-block py-0" bg="#29398e" variant="dark">
                <Container className="py-2">
                    <div className="mainHeader">
                        <Navbar.Brand href="/">
                            <img src={settings.logo} alt="Korba Logo" />
                        </Navbar.Brand>
                        <div className="headerRight">
                            <h4>{settings['title-hindi']}</h4>
                            <p>{settings.site_name}</p>
                            <h6 className="text-right">{settings['sub-title']}</h6>
                        </div>
                    </div>
                </Container>
                <div className="d-block mainNavbar pl-3 pr-3">
                    <Container className="d-block">
                        <div className="d-flex d-lg-none justify-content-end">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="About Us">
                                    <NavDropdown.Item href={basePath + "/about"}>Introduction of KMC</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath + "/about"}>Introduction of Korba</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath + "/about/korbamap"}>Map of Korba</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath + "/about/social-geological-of-korba"}>Social and Geological of Korba</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath + "/docs/ward_information.pdf"} target="_blank">Information of Wards</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Administration">
                                    <NavDropdown.Item href={basePath+"/administration/organisation-structure"}>Organizational Structure</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath + "/administration/mayor-list-parshad-list-alderman-list"}>Mayor List, Parshad List, Alderman List</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath + "/administration/commissioner-list"}>Commissioner List</NavDropdown.Item>
                                    <NavDropdown.Item href="docs/staffinformation2021.pdf" target="_blank">Staff List</NavDropdown.Item> 
                                    <NavDropdown.Item href="documents/Zonal_Information.pdf" target="_blank">Zonal Information</NavDropdown.Item>
                                    <NavDropdown.Item href="documents/Quarterly_Information_of_Municipal_Staff.pdf" target="_blank">Quarterly Information of Municipal Staff</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Department">
                                    <NavDropdown title="Department">
                                        <NavDropdown.Item href="#">A/c  Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Health Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Electrical Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Public Work Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Revenue Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Vehicle Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Water Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Pension Department</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">Birth Death Marriage Department</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown.Item href={basePath+"/department/scheme"}>Scheme</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath+"/department/municipal-acts-rules"}>Municipal Act/ Rule</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath+"/department/disaster-management"}>Disaster Management</NavDropdown.Item>
                                    <NavDropdown.Item href={basePath+"/department/lease-transfer"}>Lease Transfer</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/tenders">Tender</Nav.Link>
                                <Nav.Link href="/noticeboard">Notice Board</Nav.Link>
                                <NavDropdown title="APPs">
                                    <NavDropdown.Item className="dropdown-item" href="#">Korba Nigam For You</NavDropdown.Item> 
                                    <NavDropdown.Item className="dropdown-item" href="#">Complain Monitoring Application</NavDropdown.Item> 
                                    <NavDropdown.Item className="dropdown-item" href="#">Swachhata MoUD</NavDropdown.Item> 
                                    <NavDropdown.Item className="dropdown-item" href="#">Swachh Survekshan 2018 Mobile App</NavDropdown.Item> 
                                    <NavDropdown.Item className="dropdown-item" href="https://play.google.com/store/apps/details?id=ch.zhaw.nishtha_att_sys" target="_blank">Nishtha App</NavDropdown.Item> 
                                </NavDropdown>
                                <Nav.Link href="/gallery">Photo Gallery</Nav.Link>
                                <Nav.Link href="/contact">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </div>
            </Navbar>
        </>
    )
}

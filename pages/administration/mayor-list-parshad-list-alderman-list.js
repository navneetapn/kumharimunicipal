import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'

export default function Mayorlistparshadlistaldermanlist() {
    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Administration / Mayor List, Parshad List, Alderman-List" />
            <section className="sectionBlock py-5">
                <Container>
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered table-striped">
                            <thead className="all-text-white bg-primary text-light">
                                <tr>
                                    <th scope="col">S. No.</th>
                                    <th scope="col">Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><a href="MayorList.aspx">Mayor List</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><a href="ParshadList.aspx">Parshad List</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><a href="#">Alderman-List </a></td>
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
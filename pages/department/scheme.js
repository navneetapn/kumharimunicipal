import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
export default function Scheme() {

    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Department / Scheme" />
            <section className="sectionBlock py-5">
                <Container>
                    <div className="table-responsive ">
                        <table className="table table-bordered table-hover table-striped">
                            <thead className="all-text-white bg-grad">
                                <tr>
                                    <th scope="col">S. No.</th>
                                    <th scope="col">Subject / Heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Year Wise Loan and Grant">Year Wise Loan and Grant</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Details of Nirman Karya">Details of Nirman Karya</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Suda">Suda</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="AMRUT Mission Statement &amp; Guidelines" target="_blank">AMRUT Mission Statement &amp; Guidelines</a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Operational Guidelines for Individual Capacity Building." target="_blank">Operational Guidelines for Individual Capacity Building.</a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Jawaharlal Nehru National Urban Renewal Mission" target="_blank">Jawaharlal Nehru National Urban Renewal Mission</a></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Guidelines for Swachh Bharat Mission (SBM)" target="_blank">Guidelines for Swachh Bharat Mission (SBM)</a></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Rajiv Awas Yojana (RAY) Scheme Guidelines 2013-2022" target="_blank">Rajiv Awas Yojana (RAY) Scheme Guidelines 2013-2022</a></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Faecal Sludge &amp; Septage Management" target="_blank">Faecal Sludge &amp; Septage Management</a></td>
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Waste Water Recycle &amp; Reuse Policy" target="_blank">Waste Water Recycle &amp; Reuse Policy</a></td>
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
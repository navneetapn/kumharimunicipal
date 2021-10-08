import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'


export default function Socialgeological() {

    return (
        <>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About / Social and Geological of Korba" />
            <section className="sectionBlock py-5">
                <Container>
                    <h2>OVERVIEW</h2>
                    <p>Korba district was accorded the status of a full – fledged revenue district with effect from 25 may, 1998.Naturally endowed  with mineral resources like limestone, fireclay, etc possesses all the key ingredients required for thermal power generation.Korba District is an amalgam off primitive tribal culture, resplendent natural beauty and urban industrial enterprise.</p>

                    <p>The district headqurter is Korba city, which is situated on the banks of the confluence off rivers hasdeo and ahiran.</p>

                    <p>Korba is blessed eith a bounty of nature where a number of tribes are nurtured.Also known as the power capital of the state korba has become the industrial hub being enriched with all the essential raw materials for power generation viz.coal and water.Korba is know for its coal mines such as area (one of the biggest coal mine and BALCO Aluminum Plant.</p>

                    <h2>MUNICIPAL AREA</h2>
                    <p>In the year 1997 Korba was declared as district.In the year 1998 SA DA was dissolved and Muncipal corporation came into existence with rapid increase in population before 1998 while SADA was still functional its territorial jurisdiction before formation of Municipal Corporation was 76 transitory villages was taken as 56, while formation of the Korba municipal Corporation.With the increase in population and urban sprawl, the municipal boundary changes with time.the municipal Corporation encompasses an area of 215 sq.km with 67 numbers of wards.</p>

                    <h4>Table - Location &amp; Demographics Of Korba</h4>

                    <table className="table table-bordered mt-4">
                        <tbody><tr>
                            <th colSpan="2">Location</th>
                        </tr>
                            <tr>
                                <td>Latitude</td>
                                <td>22  01’ TO 23 01</td>
                            </tr>
                            <tr>
                                <td>Longitude</td>
                                <td>82 08’ TO 83 09</td>
                            </tr>
                            <tr>
                                <td>Height from sea level</td>
                                <td>304.8 meters</td>
                            </tr>
                        </tbody></table>

                    <table className="table table-bordered mt-4">
                        <tbody><tr>
                            <th colSpan="2">DEMOGRAPHICS(Census 2011)</th>
                        </tr>
                            <tr>
                                <td>Total Population (Census 2011)</td>
                                <td>363390</td>
                            </tr>
                            <tr>
                                <td>Population 2001</td>
                                <td>315690</td>
                            </tr>
                            <tr>
                                <td>Sex Ratio</td>
                                <td>925</td>
                            </tr>
                            <tr>
                                <td>Male Population</td>
                                <td>188818</td>
                            </tr>
                            <tr>
                                <td>Female Population</td>
                                <td>174572</td>
                            </tr>
                            <tr>
                                <td>Literacy</td>
                                <td>83.38%</td>
                            </tr>
                            <tr>
                                <td>Total Area of the District</td>
                                <td>7,14,544 hectare</td>
                            </tr>
                            <tr>
                                <td>Total Forest Coverage of the district</td>
                                <td>2,83,497 Hectares</td>
                            </tr>
                        </tbody></table>
                </Container>
            </section>
            <Footer />
        </>
    )

}
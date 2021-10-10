import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image';
import commissioner from '../../public/images/kuldip_sharma.jpg';
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";


export default function Commissionerlist() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Commissioner List | Kumhari Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Administration / Commissioner List" />
            <section className="sectionBlock py-5">

                <Container>
                    <h3 className="my-5 text-center">Present Commissioner</h3>
                    <Row>
                        <Col className="col-12 col-sm-5">
                            <Image src={commissioner} alt="commissioner" className="img-fluid" />
                        </Col>
                        <Col className="col-12 col-sm-7">
                                <p>भारत सरकार की महत्वपूर्ण योजना "मिशन अमृत" के तहत ई-गवर्नेस रिफार्म के क्रियान्वयन एवं इसमें समाहित जानकारियों का सीधा लाभ आमजन को सहज रूप से प्राप्त होगा तथा प्रशासकीय कामकाज में और अधिक पारदर्शिता लायी जा सकेगी। नगर पालिक निगम कोरबा द्वारा क्रियान्वित विभिन्न शासकीय योजनाओं, निगम के जनहितैषी कार्यो, उपलब्धियों तथा समय-समय पर संचालित होने वाली गतिविधियों के साथ - साथ निगम से संबंधित मूलभूत जानकारी भी इसके माध्यम से नागरिक बंधुओं को प्राप्त होगी। ई-गवर्नेस रिफार्म के बेहतर स्वरूप में क्रियान्वयन कर निगम निष्पक्ष व पारदर्शी प्रशासन की परिकल्पना को साकार रूप देने, शासन की योजनाओं का लाभ आमजन तक त्वरित गति से पहुंचाने, निगम की सेवाओं को बेहतर गति व सही दिशा देने के साथ-साथ आमजन की आंकाक्षओं की पूर्ति त्वरित रूप से करने में पूर्ण सफलता प्राप्त करेगा, ऐसा मैं विश्वास रखता हूँ।</p>
                                <p>नगर पालिक निगम कोरबा शासन से प्राप्त दिशा निर्देशों के अनुरूप "मिशन अमृत" के तहत ई-गवर्नेस रिफार्म के बेहतर क्रियान्वयन हेतु पूर्ण रूप से कृत संकल्पित है, निगम द्वारा इसके शत प्रतिषत् क्रियान्वयन के लिए सभी आवश्यक कदम उठाऐ गए है, जो निरंतर प्रगतिशील रहेंगें।</p>
                                <h6>(श्री कुलदीप शर्मा)</h6>
                                <p>
                                    <b>आयुक्त<br/>
                                        नगर पालिक निगम, कोरबा</b>
                                </p>
                                <p>
                                    Contact No :  07759-221288<br/>
                                    Email: corporationkorba @gmail.com
                                </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <hr />
                    <h3 className="my-5 text-center">Previous Commissioner List</h3>
                    <Row>
                        <Col className="col-12">
                            <div className="table-responsive-sm">
                                <table className="table table-hover table-bordered table-striped">
                                    <thead className="all-text-white bg-primary text-light">
                                        <tr>
                                            <th scope="col">क्रमांक</th>
                                            <th scope="col">नाम</th>
                                            <th scope="col">कार्यकाल अवधि</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>श्री आर.पी. सिंह</td>
                                            <td>09-06-1998 से 29-05-2000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>श्री मसूद अख्तर (रा.प्र.से.)</td>
                                            <td>29-05-2000 से 19-09-2000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>श्री आर.पी. सिंह</td>
                                            <td>19-09-2000 से 30-10-2002</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>श्री अशोक शर्मा</td>
                                            <td>30-10-2002 से 15-11-2002</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>श्री आर.पी.तिवारी</td>
                                            <td>15-11-2002 से 02-12-2002</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>श्री चन्द्रहास देवांगन (रा.प्र.से.)</td>
                                            <td>02-12-2002 से 27-08-2003</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>श्री पी.बी. काशी</td>
                                            <td>27-08-2003 से 15-10-2003</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>श्री जितेन्द्र शुक्ल (रा.प्र.से.)</td>
                                            <td>15-10-2003 से 23-09-2006</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>श्री अशीष मिश्री</td>
                                            <td>23-09-2006 से 12-06-2007</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>श्री आर.पी. तिवारी  </td>
                                            <td>12-06-2007 से 15-06-2007</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>श्री अशोक शर्मा </td>
                                            <td>15-06-2007 से 24-08-2009</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>श्री जनमेजय महोेबे (रा.प्र.से.)</td>
                                            <td>24-08-2009 से 18-04-2011</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">13</th>
                                            <td>श्री विनोद कुमार खेत्रपाल</td>
                                            <td>18-04-2011 से 16-05-2011</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">14</th>
                                            <td>श्री आर.एक्का (रा.प्र.से.)</td>
                                            <td>16-05-2011 से 13-05-2013</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>श्री आलोक चंद्रवंशी </td>
                                            <td>13-05-2013 से 30-09-2015</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">16</th>
                                            <td>श्री अजय कुमार अग्रवाल</td>
                                            <td>04-11-2015 से 10-10-2017</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">17</th>
                                            <td>श्री रणबीर शर्मा (भा.प्र.से.)</td>
                                            <td>10-10-2017 से 05-02-2019</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">18</th>
                                            <td>श्री एस.के. दूबे </td>
                                            <td>14-02-2019 से 02-07-2019</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">19</th>
                                            <td>श्री राहुल देव</td>
                                            <td>03-07-2019 से 24-05-2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">20</th>
                                            <td>श्री एस जयवर्धन</td>
                                            <td>25-05-2020 से 07-06-2021</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">21</th>
                                            <td>श्री कुलदीप शर्मा </td>
                                            <td>08-06-2021 से अब तक</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </section>
            <Footer />
        </>
    )

}
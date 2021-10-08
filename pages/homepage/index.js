import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, ListGroup, Carousel, Accordion, Button } from 'react-bootstrap'
import Image from 'next/image'
import banner from '../../public/banners/banner.webp'
import cm from '../../public/images/department/cm.jpg';
import dm from '../../public/images/department/dm.jpg';
import ias from '../../public/images/department/ias.jpg';
import mayor from '../../public/images/department/mayor.jpg';
import { SRLWrapper } from 'simple-react-lightbox';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export default function Homepage() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [carouselData, setCarouselData] = useState([]);
	const [galleryData, setGalleryData] = useState([]);
	const [videoData, setVideoData] = useState([]);
	const [noticeBoardData, setNoticeBoardData] = useState([]);
	const [tenderData, setTenderData] = useState([]);
	const [ministersData, setMinistersData] = useState([]);

	useEffect(() => {
		fetch("https://classified-claylist.herokuapp.com/api/notices")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setNoticeBoardData(result.data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, []);

	useEffect(() => {
		fetch("https://classified-claylist.herokuapp.com/api/ministers")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setMinistersData(result.data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, []);
	console.log(`ministersData`, ministersData)
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
	useEffect(() => {
		fetch("https://classified-claylist.herokuapp.com/api/banners")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setCarouselData(result.data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, []);
	useEffect(() => {
		fetch("https://classified-claylist.herokuapp.com/api/video")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setVideoData(result.data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, []);



	useEffect(() => {
		fetch("https://classified-claylist.herokuapp.com/api/latest-gallery")
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
	return (
		<>
			<Carousel>
				{carouselData.map((el, index) =>
					<Carousel.Item key={index}>
						<img
							className="d-block w-100"
							src={el.logo}
							alt="Img"
						/>
						<Carousel.Caption>
							<h3>{el.title} </h3>
						</Carousel.Caption>
					</Carousel.Item>
				)}
			</Carousel>
			<section className="py-3 ctaSection bg-light border-bottom">
				<Container>
					<h3 className="text-center m-0 mb-2">E-Market</h3>
					<div className="emarket__cta text-center">
						<a href="https://gem.gov.in">
							<Button variant="primary" size="sm">
								GeM
							</Button>
						</a>{' '}
						<a href="https://gem.gov.in">
							<Button variant="success" size="sm">
								E-Manak
							</Button>
						</a>
					</div>
				</Container>
			</section >
			<section className="py-5 department">
				<Container>
					<h3 className="text-center m-0 py-3 mb-4">Departmental Minister and Officer</h3>
					<Card className="border-0">
						<Row xs={1} md={2} lg={4} className="g-4">
							{ministersData && 
								ministersData.map((el)=> {
									<Col>
										<Card>
											<Image src={el.image} alt="Sample Text" />
											<Card.Body>
												<Card.Title>{el.name}</Card.Title>
												<Card.Text>
													{el.position}
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								})
							}
							{/* <Col>
								<Card>
									<Image src={dm} alt="Sample Text" />
									<Card.Body>
										<Card.Title>DR. Shivkumar Dahariya</Card.Title>
										<Card.Text>
											Urban Development Minister
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card>
									<Image src={ias} alt="Sample Text" />
									<Card.Body>
										<Card.Title>Smt. Ranu Sahu</Card.Title>
										<Card.Text>
											I.A.S
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card>
									<Image src={mayor} alt="Sample Text" />
									<Card.Body>
										<Card.Title>Mr. Rajkishore Prasad</Card.Title>
										<Card.Text>
											Mayor
										</Card.Text>
									</Card.Body>
								</Card>
							</Col> */}
						</Row>
					</Card>
				</Container>
			</section>

			<section className="py-5 bg-dark onlineServices">
				<Container>
					<h3 className="text-center text-light m-0 py-3 mb-4">Online E-Services</h3>
					<Row>
						<Col>
							<Card className="p-3">
								<ul className="list-unstyled">
									<li><a href="https://eproc.cgstate.gov.in/CHEPS/security/getSignInAction.do"><i className="fa fa-check-square-o" aria-hidden="true"></i> E-Procurement (eProc)</a> </li>
									<li><a href="https://korba.urbanecg.gov.in/CitizenHome.html"><i className="fa fa-home" aria-hidden="true"></i> Property Tax (urbanecg)</a> </li>
									<li><a href="http://bpms.sudacg.in/"><i className="fa fa-building-o" aria-hidden="true"></i> Building Permission (BPMS)</a> </li>
								</ul>
							</Card>
						</Col>
						<Col>
							<Card className="p-3">
								<ul className="list-unstyled">
									<li><a href="https://cggrievance.cgg.gov.in/"><i className="fa fa-check-square-o" aria-hidden="true"></i> Nidan 1100</a> </li>
									<li><a href="https://hamarshahar.in/"><i className="fa fa-file-o" aria-hidden="true"></i> Payroll System (Nishtha)</a> </li>
									<li><a href="https://nsap.nic.in/"><i className="fa fa-inr" aria-hidden="true"></i> National Pension (NSAP)</a> </li>
								</ul>
							</Card>
						</Col>
						<Col>
							<Card className="p-3">
								<ul className="list-unstyled">
									<li><a href="https://edistrict.cgstate.gov.in/PACE/login.do"><i className="fa fa-certificate" aria-hidden="true"></i> Birth Death Marriage Certificate (e District)</a> </li>
									<li><a href="https://edistrict.cgstate.gov.in/PACE/login.do"><i className="fa fa-id-card-o" aria-hidden="true"></i>Trade Licence</a> </li>
									<li><a href="https://korba.urbanecg.gov.in/CitizenHome.html"><i className="fa fa-tint" aria-hidden="true"></i> Water Tax</a> </li>
								</ul>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="py-5 bg-light">
				<Container>
					<h3 className="text-center m-0 py-3 mb-4">Latest Activities</h3>
					<Row xs={1} md={2} lg={2} className="g-4">
						<Col>
							<Card className="latestNewsCard">
								<Card.Body>
									<Card.Header className="bold bg-primary text-white">Tenders</Card.Header>
									<ListGroup className="list p-4">
										{
											tenderData.length > 0 && tenderData.map((el)=> {
												<ListGroup.Item className="position-relative px-4">
													<a href={el.file}>
														<i className="fa fa-circle"></i> {el.title}
													</a>
												</ListGroup.Item>
											})
										}
										
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="latestNewsCard">
								<Card.Body>
									<Card.Header className="bold bg-primary text-white">Notices</Card.Header>
									<ListGroup className="list p-4">
										{
											noticeBoardData.length > 0 && noticeBoardData.map((el)=> {
												<ListGroup.Item className="position-relative px-4">
													<a href={el.file}>
														<i className="fa fa-circle"></i> {el.title}
													</a>
												</ListGroup.Item>
											})
										}
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="otherLinkWrapper py-5 my-3">
				<Container>
					<h4 className="bold pb-3"> Other Links</h4>
					<Row xs={1} md={2} lg={4} className="otLinks">

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Information</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="#" target="_blank">अधिसूचना अधिनियम</a></li>
											<li className=""><a href="#">Application Form from Citizen</a></li>
											<li className=""><a href="#">RTI Information ( सूचना का अधिकार )</a></li>
											<li className=""><a href="#">Vacancy & Appointment</a></li>
											<li className=""><a href="documents/812432867.xls">BPL Survey List</a></li>
											<li className=""><a href="docs/Giotagged_Detail.pdf">Geotagging Details Korba</a></li>
											<li className=""><a href="docs/Swachta/SvachtaShakha.xls" target="_blank">शौचालयो की सम्पूर्ण जानकारी </a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Swachhta Sarvekshan</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="#">स्वच्छता सर्वेक्षण 2019</a></li>
											<li className=""><a href="#">स्वच्छता सर्वेक्षण 2018</a></li>
											<li className=""><a href="#">स्वच्छता सर्वेक्षण 2017</a></li>
											<li className=""><a href="#">Vehicle Tracking Systems</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<div className="">
								<a className="accordianWrapperDiv" target="_blank" href="docs/AnnualRate/annual%20rate.pdf">Annual Rate</a>
							</div>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Amrut Mission</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="#">e-Gov</a></li>
											<li className=""><a href="#">Municipal Cadre</a></li>
											<li className=""><a href="#">DEA</a></li>
											<li className=""><a href="#">Urban Planning</a></li>
											<li className=""><a href="#">SBM</a></li>
											<li className=""><a href="#">Smart City Korba Public Poll</a></li>
											<li className=""><a href="#">Credit Rating Korba</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>


						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href="docs/All_Date_PMAY.pdf" target="_blank">PMAY</a>
							</div>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Budget Report</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="#">Budget</a></li>
											<li className=""><a href="#">Income and Expenditure Account and Balance Sheet  </a></li>
											<li className=""><a href="#">Demand Collection Balance </a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>संपदा विभाग</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="#">दुकान विक्र्य</a></li>
											<li className=""><a href="#">मकान विक्र्य </a></li>
											<li className=""><a href="#">प्लाट विक्र्य</a></li>
											<li className=""><a href="docs/Shop_Rent.pdf" target="_blank">दुकान किराया </a></li>
											<li className=""><a href="#">नामांतरण</a></li>
											<li className=""><a href="docs/Lease_Renewal.pdf" target="_blank">लीज नवीनीकरण</a></li>
											<li className=""><a href="#">Post Demand Of Tax Collection Balance (2015-16)</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>समाज कल्याण विभाग</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="docs/SamajKalyanVibhag/SUKHADSAHARAPENSION2021.pdf" target="_blank">सुखद सहारा पेंशन योजना</a></li>
											<li className=""><a href="#">संगठित कर्मकरो की जानकारी </a></li>
											<li className=""><a href="#">रैन बसेरा की जानकारी</a></li>
											<li className=""><a href="#">मुख्यमंत्री तीर्थ यात्रा योजाना</a></li>
											<li className=""><a href="#">संबंधित अन्य जानकारी</a></li>
											<li className=""><a href="docs/SamajKalyanVibhag/VRIDHAWASTHAPENSION2021.pdf" target="_blank">इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन</a></li>
											<li className=""><a href="docs/SamajKalyanVibhag/VIKLANG_PENSION_2021.pdf" target="_blank">विकलांग पेंशन</a></li>
											<li className=""><a href="docs/SamajKalyanVibhag/VIDHAWA_PENSION_2021.pdf" target="_blank">विधवा पेंशन</a></li>
											<li className=""><a href="docs/SamajKalyanVibhag/mukyamatri_pension.pdf" target="_blank">मुख्यमंत्री पेंशन</a></li>
											<li className=""><a href="docs/SamajKalyanVibhag/SAMAJIKSURKSHAPENSION2021.pdf" target="_blank">सामाजिक सुरक्षा पेंशन</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>क्वान्टिफिएबल</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="#" target="_blank">क्वान्टिफिएबल डाटा-2021 Link</a></li>
											<li className=""><a href="https://play.google.com/store/apps/details?id=chips.in.supervisorapp" target="_blank">क्वान्टिफिएबल  cgqdc  सुपरवाईजर एप (प्ले स्टोर)</a></li>
											<li className=""><a href="https://play.google.com/store/apps/details?id=chips.in.qdcuserapp" target="_blank">क्वान्टिफिएबल cgqdc यूजर एप (प्ले स्टोर)</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Latest News</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="#">अधिसूचना अधिनियम </a></li>
											<li className=""><a href="#">Letter Upload</a></li>
											<li className=""><a href="#">SLIP / SLBM Korba</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href="#" target="_blank">E-mail & SMS BroadCosting</a>
							</div>
						</Col>

						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href="#" target="_blank">Project & Scheme</a>
							</div>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>COVID-19</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="http://cghealth.nic.in/cghealth17/" target="_blank">COVID-19</a></li>
											<li className=""><a href="#">होम आइसोलेशन हेतु शपथ पत्र </a></li>
											<li className=""><a href="images/covid19/7.pdf" target="_blank">Covid 19 Vaccination Center</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>RTI</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="docs/Placement_Labour.pdf" target="_blank">स्वच्छता शाखा में कार्यरत अधिकारी/कर्मचारि/प्लेसमेंट कर्मियो की जानकारी</a></li>
											<li className=""><a href="#">Sou_Motu RTI Disclosure</a></li>
											<li className=""><a href="#">RTI Statement - Jan-Dec 2017</a></li>
											<li className=""><a href="#">RTI Act - 2005</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>


						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href="#" target="_blank">Feedback/Suggestions</a>
							</div>
						</Col>
						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href="#" target="_blank">Financial Statement and Internal Audit Report</a>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="videoSection bg-dark py-5">
				<Container>
					<Row>
						<Col className="col-12 col-sm-4">
							<div className="videoDescription text-light">
								<h3 className="my-2">Video</h3>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Provident quidem veritatis adipisci asperiores debitis voluptates consequuntur! Accusamus molestiae architecto pariatur, magni a laboriosam quos at voluptatem itaque reiciendis non nesciunt.</p>
							</div>
						</Col>
						<Col className="col-12 col-sm-8">

							{videoData.length > 0 &&
								// <video width="100%" controls>
								// 	<source src={videoData[0]['file']} type="video/mp4" />
								// 	<source src="movie.ogg" type="video/ogg" />
								// 	Your browser does not support the video tag.
								// </video>
								<Video loop muted
									controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
									onCanPlayThrough={() => {
										// Do stuff
									}}>
									<source src={videoData[0]['file']} type="video/webm" />
								</Video>
							}
						</Col>
					</Row>
				</Container>
			</section>




			<section className="bg-light py-5 galleryWrapper galleryWrapperHome">

				<Container>
					<h3 className="text-left m-0 py-3 mb-4">Event Gallery</h3>
				</Container>
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

		</>
	)
}

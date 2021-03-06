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
import {Helmet} from "react-helmet";

export default function Homepage() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [carouselData, setCarouselData] = useState([]);
	const [galleryData, setGalleryData] = useState([]);
	const [videoData, setVideoData] = useState([]);
	const [noticeBoardData, setNoticeBoardData] = useState([]);
	const [tenderData, setTenderData] = useState([]);
	const [ministersData, setMinistersData] = useState([]);
	const [basePath, setBasepath] = useState([]);
	useEffect(() => {
		setBasepath(window.location.origin);
	}, []);

	useEffect(() => {
		fetch("http://admin.kumharimunicipal.in/api/notices")
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
		fetch("http://admin.kumharimunicipal.in/api/ministers")
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
	useEffect(() => {
		fetch("http://admin.kumharimunicipal.in/api/tenders")
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
		fetch("http://admin.kumharimunicipal.in/api/banners")
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
		fetch("http://admin.kumharimunicipal.in/api/video")
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
		fetch("http://admin.kumharimunicipal.in/api/latest-gallery")
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
		   <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Kumhari Municipal Corporation</title>
            </Helmet>
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
							{ministersData.map((el, index) => (
								<Col key={index}>
									<Card>
										<img src={el.image} alt={el.name} />
										<Card.Body>
											<Card.Title>{el.name}</Card.Title>
											<Card.Text>
												{el.position}
											</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							))
							}
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
									<li><a href={basePath + "/info-needed"}><i className="fa fa-home" aria-hidden="true"></i> Property Tax (urbanecg)</a> </li>
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
									<li><a href={basePath + "/info-needed"}><i className="fa fa-tint" aria-hidden="true"></i> Water Tax</a> </li>
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
									<Card.Header className="bold bg-primary text-white text-center">Tenders</Card.Header>
									<ListGroup className="list p-4 marqueeNewHome">
										<marquee behavior="scroll" direction="up">
											{
												tenderData.length > 0 && tenderData.map((el, index) => (
													<ListGroup.Item className="position-relative px-4" key={index}>
														<a href={el.file} target="_blank" className="newInfo">
															<i className="fa fa-circle"></i> {el.title}
														</a>
													</ListGroup.Item>
												))
											}
										</marquee>

									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="latestNewsCard">
								<Card.Body>
									<Card.Header className="bold bg-primary text-white text-center">Notices</Card.Header>
									<ListGroup className="list p-4 marqueeNewHome">
										<marquee behavior="scroll" direction="up">
											{
												noticeBoardData.length > 0 && noticeBoardData.map((el, index) => (
													<ListGroup.Item className="position-relative px-4" key={index}>
														<a href={el.file} target="_blank" className="newInfo">
															<i className="fa fa-circle"></i> {el.title}
														</a>
													</ListGroup.Item>
												))
											}
										</marquee>
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="otherLinkWrapper py-5 my-3">
				<Container>
					<h4 className="bold pb-3 text-center"> Other Informational Links</h4>
					<Row xs={1} md={2} lg={4} className="otLinks">

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Information</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="https://uad.cg.gov.in/Home_pages/rajpatra.aspx" target="_blank">???????????????????????? ?????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Application Form from Citizen</a></li>
											<li className=""><a href={basePath + "/info-needed"}>RTI Information ( ??????????????? ?????? ?????????????????? )</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Vacancy & Appointment</a></li>
											<li className=""><a href={basePath + "/info-needed"}>BPL Survey List</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Geotagging Details Kumhari</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????????????????? ?????? ???????????????????????? ????????????????????? </a></li>
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
											<li className=""><a href={basePath + "/info-needed"}>???????????????????????? ??????????????????????????? 2019</a></li>
											<li className=""><a href={basePath + "/info-needed"}>???????????????????????? ??????????????????????????? 2018</a></li>
											<li className=""><a href={basePath + "/info-needed"}>???????????????????????? ??????????????????????????? 2017</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Vehicle Tracking Systems</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href={basePath + "/info-needed"}>Annual Rate</a>
							</div>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Amrut Mission</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href={basePath + "/info-needed"}>e-Gov</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Municipal Cadre</a></li>
											<li className=""><a href={basePath + "/info-needed"}>DEA</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Urban Planning</a></li>
											<li className=""><a href={basePath + "/info-needed"}>SBM</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Smart City Kumhari Public Poll</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Credit Rating Kumhari</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>


						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href={basePath + "/info-needed"} target="_blank">PMAY</a>
							</div>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>Budget Report</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href={basePath + "/info-needed"}>Budget</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Income and Expenditure Account and Balance Sheet  </a></li>
											<li className=""><a href={basePath + "/info-needed"}>Demand Collection Balance </a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>??????????????? ???????????????</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href={basePath + "/info-needed"}>??????????????? ?????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>???????????? ????????????????????? </a></li>
											<li className=""><a href={basePath + "/info-needed"}>??????????????? ?????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>??????????????? ?????????????????? </a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????? ????????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Post Demand Of Tax Collection Balance (2015-16)</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>???????????? ?????????????????? ???????????????</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href={basePath + "/info-needed"}>???????????? ??????????????? ??????????????? ???????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>?????????????????? ????????????????????? ?????? ????????????????????? </a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????? ??????????????? ?????? ?????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????????????????????????????? ??????????????? ?????????????????? ??????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????????????????? ???????????? ?????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>?????????????????? ??????????????? ??????????????????????????? ????????????????????????????????? ???????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????????????????? ???????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>??????????????? ???????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????????????????????????????? ???????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????????????????? ????????????????????? ???????????????</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>???????????????????????????????????????</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href="https://uad.cg.gov.in/Home_Pages/Quanfitble2021.aspx" target="_blank">??????????????????????????????????????? ????????????-2021 Link</a></li>
											<li className=""><a href="https://play.google.com/store/apps/details?id=chips.in.supervisorapp" target="_blank">???????????????????????????????????????  cgqdc  ??????????????????????????? ?????? (???????????? ???????????????)</a></li>
											<li className=""><a href="https://play.google.com/store/apps/details?id=chips.in.qdcuserapp" target="_blank">??????????????????????????????????????? cgqdc ???????????? ?????? (???????????? ???????????????)</a></li>
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
											<li className=""><a href={basePath + "/info-needed"}>???????????????????????? ????????????????????? </a></li>
											<li className=""><a href={basePath + "/info-needed"}>Letter Upload</a></li>
											<li className=""><a href={basePath + "/info-needed"}>SLIP / SLBM Kumhari</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>

						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href={basePath + "/info-needed"}>Project &amp; Scheme</a>
							</div>
						</Col>

						<Col>
							<Accordion className="accordianWrapper" defaultActiveKey="0">
								<Accordion.Item className="">
									<Accordion.Header>COVID-19</Accordion.Header>
									<Accordion.Body>
										<ul className=" list-unstyled m-0">
											<li className=""><a href={basePath + "/info-needed"}>COVID-19</a></li>
											<li className=""><a href={basePath + "/info-needed"}>????????? ???????????????????????? ???????????? ????????? ???????????? </a></li>
											<li className=""><a href={basePath + "/info-needed"}>Covid 19 Vaccination Center</a></li>
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
											<li className=""><a href={basePath + "/info-needed"}>???????????????????????? ???????????? ????????? ????????????????????? ?????????????????????/????????????????????????/??????????????????????????? ????????????????????? ?????? ?????????????????????</a></li>
											<li className=""><a href={basePath + "/info-needed"}>Sou_Motu RTI Disclosure</a></li>
											<li className=""><a href={basePath + "/info-needed"}>RTI Statement - Jan-Dec 2017</a></li>
											<li className=""><a href={basePath + "/info-needed"}>RTI Act - 2005</a></li>
										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>



						<Col>
							<div className="">
								<a className="accordianWrapperDiv" href={basePath + "/info-needed"}>Financial Statement and Internal Audit Report</a>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="videoSection bg-dark">
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




			<div className="galleryHome py-5">
				<Container>
					<h3 className="text-center m-0 py-3 mb-4">Event Gallery</h3>
				</Container>
				<section className="bg-light galleryWrapper galleryWrapperHome">
					<SRLWrapper>
						<div className="container">
							{galleryData.slice(1, 5).map(image => (
								<div key={image.id} className="image-card">
									<a href={`${image.image}`}>
										<img className="image" src={`${image.image}`} alt="" />
									</a>
								</div>
							))}
						</div>
					</SRLWrapper>

				</section>
			</div>
		</>
	)
}

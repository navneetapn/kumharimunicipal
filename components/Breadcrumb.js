import React from 'react'
import { Container, Table, Button,Row,Col, Placeholder, Alert} from 'react-bootstrap'
import Image from 'next/image'

export default function Breadcrumb(props) {
    return (
        <div>
            <section className="bg-light breadcrubms__wrapper">
                <div xs={1} md={1} lg={1} className="heroImage">
                       <Image
							className="w-100"
							src={props.banner}
							alt="Tender Image"
						/>
                        <div className="bannerContent">
                            <p className="imageTitle bold">{props.name}</p>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li>/</li>
                                <li><a href="">{props.name}</a></li>
                            </ul>
                        </div>
                </div>
            </section>
        </div>
    )
}

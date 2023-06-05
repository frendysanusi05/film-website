import { Container, Col, Row, Button } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro d-flex justify-content-end align-items-end">
			<Container className="text-white text-center d-flex justify-content-center align-items-center">
				<Row>
				<Col>
					<div className="title">WATCH FOR FREE</div>
					<div className="title">WITHOUT A TICKET</div>
					<div className="introButton mt-4 text-center">
						<Button variant="dark">See All List</Button>
					</div>
				</Col>
				</Row>
			</Container>
        </div>
    )
}

export default Intro
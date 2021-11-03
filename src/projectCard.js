import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// It's important to write Documentation!!!

class ProjectCard extends React.Component {
    render() {
        const proj = this.props.proj;
        /* const exampleCard =         {
            id:             "qa-promo-card-link-a-listening-ear",
            grant_href:     "/funding/grants/0045389502",
            project_name:   "A Listening Ear",
            amount:         "6,600", // £ to
            // recipients:     "GB-CHC-SC048255,
            recipients:     "The Lade Centre",
            date:           new Date('19 July, 2021'),
            summary:        "This group will use the funding to support their �Listening Service� which provides free professional counselling to those affected by poor mental health on the Isle of Bute. The group have seen a significant rise in demand due to COVID-19 and require additional support to cover therapist costs.", // 0045389502,
            location:       "Isle of Bute, Argyll and Bute, Argyll and Bute",
            programme:      "National Lottery Awards for All Scotland"
         } */
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <Col sm={8}>
                                <h2 id={proj['id']} /*{proj['grant_href']} */ >{proj['project_name']}</h2>
                            </Col>
                            <Col sm={4}>{proj['amount']}</Col>
                        </Row>
                        <Row>
                            <Col sm><strong>Active: </strong>{proj['active']} {Date(proj['date'])}</Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <h3><strong>Programme: </strong>{proj['programme']}</h3>
                                <p>{proj['summary']}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h4>{proj['recipients']}</h4>
                        <p><strong>Organisation type: </strong>{proj['orgType']}</p>
                        <p><strong>Location: </strong>{proj['location']}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProjectCard;
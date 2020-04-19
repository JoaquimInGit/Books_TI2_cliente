
/*import React from 'react';
import { Card, Button, Badge, ListGroup } from 'react-bootstrap';
import pic from '../../assets/niceguy.jpg';

export default class AuthorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isAvailable: true,
            skills: ['Node.js', 'React', 'Javascript'],
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    checkAvailability(e) {
        console.log("It's available");
    }

    switchAvailability(e) {
        this.setState(state => ({ isAvailable: !state.isAvailable }));
    }

    render() {
        return (
            <Card className="text-center" border="primary" style={{ width: '10rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {this.props.info.work}
                    </Card.Subtitle>
                    <Card.Text>
                        {this.props.info.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted" style={{ marginTop: 10 }}>
                        Skills
                         </Card.Subtitle>
                    <ListGroup>
                        {this.state.skills.map((skill, index) => (<ListGroup.Item key={index.toString()}>{skill}</ListGroup.Item>))}
                    </ListGroup>
                    {this.state.date.toLocaleString()}
                </Card.Body>
                <Button variant="primary" onClick={e => this.switchAvailability(e)} >Availability</Button>
                {this.state.isAvailable
                    ? <Badge variant="success">Available</Badge>
                    : <Badge variant="danger">Unavailable</Badge>
                }
            </Card>
        );
    }
}
*/
import React from 'react';
import { Card, Button, Badge, ListGroup } from 'react-bootstrap';
import niceguy from '../../assets/niceguy.jpg';

export default class AuthorComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            isAvailable: true,
            skills: ["NodeJS", "javaScript", "coisasEMGeral"],
        };

    }

    componentDidMount() {
        this.timer = setInterval(() => this.thick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    thick() {
        this.setState({ date: new Date() });
    }

    handleClick(e) {
        this.setState(state => ({ isAvailable: !state.isAvailable }));
    }

    render() {
        return (
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={niceguy} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    {this.state.date.toLocaleString()}
                    <Card.Subtitle className="mb-2 text-muted">

                        {this.props.info.work}
                        <br />
                    </Card.Subtitle>
                    <Card.Text>
                        {this.props.info.description}
                    </Card.Text>
                    <Button variant="primary" onClick={e => this.handleClick(e)}>switch Avaiability</Button>
                    <>
                        {this.state.isAvailable
                            ? <Badge variant="success">Available</Badge>
                            : <Badge variant="danger">Unavailable</Badge>}
                    </>
                </Card.Body>
                <ListGroup>
                    {this.state.skills.map((skills, index) => (
                        <ListGroup.Item key={'skill' + index.toString()}>{skills}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        );
    }
}

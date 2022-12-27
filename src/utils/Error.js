import { Col } from 'reactstrap';

const Error = ({ errMsg }) => {
    return (
        <Col>
            <h4 className='text-white text-center p-4'>{errMsg}</h4>
        </Col>
    );
};

export default Error;
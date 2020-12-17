import { connect } from 'react-redux';
import Car from '../components/Car';

// write mapStateToProps function and connect and export it
const mapStateToProps = (state) => {
	return {
		cars: state.cars
	};
};

export default connect(mapStateToProps)(Car);
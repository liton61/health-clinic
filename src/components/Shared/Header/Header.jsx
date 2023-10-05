import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-7'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header; 
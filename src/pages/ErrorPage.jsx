import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiSolidError } from 'react-icons/bi';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='inline-block mx-auto'>
                    <BiSolidError size={200} style={{ color: '#4f4f4f' }} />
                </div>
                <h2 className='-mt-16'>404</h2>
                <p className='w-[75%]'>Some error occurred. This could possibly be because of an outdated version of your browser. Please upgrade your browser to the latest version or use Chrome browser and try again. Please mail to support@advait.org.in in case your issue is still not resolved.</p>
                <Link to={'/'}>
                    <button className='btn text-white text-2xl'>Go Back to Home</button>
                </Link>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .container {
        padding: 5rem 0;
        text-align: center;

        h2 {
            font-size: 10rem;
        }

        h3 {
            font-size: 4.2rem;
        }

        p {
            display: inline-block;
            text-align: justify;
            margin: auto;
            margin: 2rem 0;
            color: black;
        }
        button {
            display: block;
            margin: auto;
            background-color: ${({ theme }) => theme.lightTheme};
            padding: 1rem 2rem;
            border-radius: 0.5rem;
        }
    }
`;

export default ErrorPage;

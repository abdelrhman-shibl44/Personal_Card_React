import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className='footer p-1'>
            <div className='text-center d-flex justify-content-evenly'>
                <a className='text-secondary fs-3' href='https://www.facebook.com'>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className='text-secondary fs-3' href='https://www.twitter.com'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className='text-secondary fs-3' href='https://www.linkedIn.com'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className='text-secondary fs-3' href='https://www.github.com'>
                    <FontAwesomeIcon icon={faGithub} />
                </a >
            </div >
        </div >
    )
}
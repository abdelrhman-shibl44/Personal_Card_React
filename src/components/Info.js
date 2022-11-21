import img from "../images/personal_image2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export const Info = () => {
    return (
        <div className="info text-center p-0 mb-4">
            <div className="personal-image">
                <img className="text-center" width="100%" src={img} />
            </div>
            <h1 className="fs-5 mt-0 mb-0">Abdelrhman Shibl</h1>
            <p className="m-0 fs-6">A Frontend Developer</p>
            <span className="d-block fs-8 mt-1 mb-2">AbdelrhmanShibl.website</span>
            <div className="buttons d-flex justify-content-evenly">
                <button className="d-flex align-items-center justify-content-evenly">
                    <FontAwesomeIcon className="fs-6" icon={faEnvelope} />
                    Email
                </button>
                <button className="d-flex align-items-center justify-content-evenly">
                    <FontAwesomeIcon className="fs-6" icon={faLinkedin} />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}
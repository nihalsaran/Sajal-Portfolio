import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import Leetcode from '../../assets/images/leetcode.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faDiagramProject, faEnvelope, faGraduationCap, faHome, faNewspaper, faPenNib, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img src={LogoSubtitle} alt="sajalsatsangi" />
        </Link>
        <nav>
            <NavLink exact="true" activelassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#fff' />
            </NavLink>
            <NavLink exact="true" activelassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#fff' />
            </NavLink>
            <NavLink exact="true" activelassname="active" className="skill-link" to="/skill">
                <FontAwesomeIcon icon={faPenNib} color='#fff' />
            </NavLink>
            <NavLink exact="true" activelassname="active" className="education-link" to="/education">
                <FontAwesomeIcon icon={faGraduationCap} color='#fff' />
            </NavLink>
            <NavLink exact="true" activelassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faChartSimple} color='#fff' />
            </NavLink>
            <NavLink exact="true" activelassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} color='#fff' />
            </NavLink>
            <NavLink exact="true" activelassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faNewspaper} color='#fff' />
            </NavLink>
            <NavLink exact="true" activelassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#fff' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sajal-satsangi-547802204/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#fff' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/SajalSatsangi'>
                    <FontAwesomeIcon icon={faGithub} color='#fff' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://leetcode.com/Sajal_Satsangi/'>
                    <img src={Leetcode} alt="leetcode"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
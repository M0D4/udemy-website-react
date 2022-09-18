import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className='footer-section'>
                <div className='links-and-language-selector'>
                    <ul className='link-column'>
                        <li className='mb-2'><Link to={""}>Udemy Business</Link></li>
                        <li className='mb-2'><Link to={""}>Teach on Udemy</Link></li>
                        <li className='mb-2'><Link to={""}>Get the app</Link></li>
                        <li className='mb-2'><Link to={""}>About us</Link></li>
                        <liv><Link to={""}>Contact us</Link></liv>
                    </ul>
                    <ul className='link-column'>
                        <li className='mb-2'><Link to={""}>Careers</Link></li>
                        <li className='mb-2'><Link to={""}>Blog</Link></li>
                        <li className='mb-2'><Link to={""}>Help and Support</Link></li>
                        <li className='mb-2'><Link to={""}>Affiliate</Link></li>
                        <liv><Link to={""}>Investors</Link></liv>
                    </ul>
                    <ul className='link-column'>
                        <li className='mb-2'><Link to={""}>Terms</Link></li>
                        <li className='mb-2'><Link to={""}>Privacy policy</Link></li>
                        <li className='mb-2'><Link to={""}>Cookie settings</Link></li>
                        <li className='mb-2'><Link to={""}>Sitemap</Link></li>
                        <liv><Link to={""}>Accessibility statement</Link></liv>
                    </ul>
                    <div className='language-selector-container'>
                        <button className='footer-lang-selector-button'>
                            <FontAwesomeIcon width={15} height={15} icon={faGlobe}></FontAwesomeIcon>
                            <span className='ml-2'>English</span>
                        </button>
                    </div>
                </div>
                <div className='logo-and-copyright'>
                    <div className='logo-container'>
                        <Link to={""}><img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='Udemy' width="91.07142857142857" height="34"></img></Link>
                    </div>
                    <div class="copyright-container" data-purpose="footer-copyright">© 2022 Udemy, Inc.</div>
                </div>
            </footer>
        </>
    );
}

export default Footer
import * as React from "react";
import { MdPhoneEnabled, MdEmail  } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub  } from 'react-icons/ai';


        
export default function Footer(){
    return (
        <div id="footer">
            <div className="wrapper">
                <div className="section" id="footer-section">
                    <div className="contacts-link">
                    <a href="https://www.linkedin.com/in/emil-bertholdsson/"><AiFillLinkedin/> Emil Bertholdsson</a>
                    </div>
                    <div className="contacts-link">
                    <a href="https://github.com/EmilBert"><AiFillGithub/> Github/EmilBert</a>
                    </div>
                    <div className="contacts-link">
                    <a href="mailto:emil.bertholdsson@gmail.com"><MdEmail/> emil.bertholdsson@gmail.com</a>
                    </div>
                    <div className="contacts-link">
                    <a href="tel:+46723161811"><MdPhoneEnabled/> +46723161811</a>
                    </div>
                 </div>
            </div>
        </div>
    );
}
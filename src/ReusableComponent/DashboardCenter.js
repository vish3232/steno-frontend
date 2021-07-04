import React, { useContext } from 'react'
import Google from '../assets/Google.svg'
import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import '../ReusableComponentCss/DashboardCenter.css'
import { useHistory } from "react-router-dom";
const DashboardCenter = (props) => {

    const history = useHistory();
    return (
        <div className="dashboard-center">
            <div className="quote-card">
                <div className="quote">
                    <span>Decide the effect you want to produce in your reader.</span>
                    <span>– Robert Collier</span>
                </div>
                <button onClick={()=>history.push('/post')} >Generate copy</button>
            </div>

            {/**<span className={context.userDetails.creditRemain === "loading" ? "loader" : null}>{context.userDetails.creditRemain === "loading" ? null : context.userDetails.creditRemain}</span> */}
            <div className="used-info">
                <div> 24 drafts</div>
                <div className="seperator"></div>
                <div> 150 published</div>
                <div className="seperator"></div>
                <div> 132 mins saved</div>
            </div>

            <div className="copy-generator-types">
                <div className="header">
                    <span>Published </span>
                    <span >See all</span>
                </div>

                <div className="card-container">
                    <div className="card" >
                        <div>
                            <span>Lorem Ipsum is simply dummy text of the dummy for lorem</span>
                            <span>June 28,2021</span>
                        </div>
                        <div>
                        <img src={Google} alt="" />
                        </div>
                        
                    </div>

                    <div className="card" >
                        <img src={Google} alt="" />
                        <div>
                            <span>Google Ad Descriptions</span>
                            <span>Lorem Ipsum is simply dummy text of the dummy for lorem.</span>
                        </div>
                    </div>

                    <div className="card" >
                        <img src={Facebook} alt="" />
                        <div>
                            <span>Facebook Ad Headlines</span>
                            <span>Lorem Ipsum is simply dummy text of the dummy for lorem.</span>
                        </div>
                    </div>

                    <div className="card" >
                        <img src={Facebook} alt="" />
                        <div>
                            <span>Facebook Ad Descriptions</span>
                            <span>Lorem Ipsum is simply dummy text of the dummy for lorem.</span>
                        </div>
                    </div>

                    <div className="card" >
                        <img src={Google} alt="" />
                        <div>
                            <span>Blog Titles</span>
                            <span>Lorem Ipsum is simply dummy text of the dummy for lorem.</span>
                        </div>
                    </div>

                    <div className="card" >
                        <img src={Instagram} alt="" />
                        <div>
                            <span>Instagram Captions</span>
                            <span>Lorem Ipsum is simply dummy text of the dummy for lorem.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCenter

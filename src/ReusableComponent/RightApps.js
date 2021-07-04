import React from 'react'
import '../ReusableComponentCss/RightApps.css'

const RightApps = () => {

    const apps = [
        { title: "#tags", content: "Lorem Ipsum has been the industry's" },
        { title: "Pexels", content: "Lorem Ipsum has been the industry's" },
        { title: "Unsplash", content: "Lorem Ipsum has been the industry's" },
        { title: "Pixabay", content: "Lorem Ipsum has been the industry's" },
    ]

    return (
        <div className="right-section-apps">
            <span className="title">Apps</span>
            <form>
                <input type="search" placeholder="search apps" />
            </form>
            <div className="apps-grid">
                {
                    apps.map((data, index) => {
                        return <div className="card" key={index}>
                            <div className="box" />
                            <span className="title">{data.title}</span>
                            <p>{data.content}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default RightApps

import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/team/dubai.jpg" alt="" />
                <input 
                placeholder="What's in your mmind Joseph?" 
                className="shareInput" 
                />
            </div>
            <div className="shareBottom"></div>
        </div>
    </div>
  )
}

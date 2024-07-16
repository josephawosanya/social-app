import "./sidebar.css"
import { Bookmark, ChatOutlined, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, RssFeedRounded, School, WorkOutline } from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedRounded className="sidebarIcon"/>
            <span className="sideListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatOutlined className="sidebarIcon"/>
            <span className="sideListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sideListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sideListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sideListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sideListItemText">uestions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sideListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sideListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sideListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/team/3.jpg" alt="" />
            <span className="sidebarFriendName">Slivester Banks</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

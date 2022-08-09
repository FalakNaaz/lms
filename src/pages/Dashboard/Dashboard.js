import React from 'react'
import Sidebar from '../../components/Sidebar/SidebarComponent'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import MessageIcon from '@material-ui/icons/Message'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function Dashboard() {
  return (
    <div>
        <div style={{paddingTop:'40px', flex:'0.2', position:'fixed', width:'200px', height:'100vh', boxShadow:'0px 5px 22px -13px grey', backgroundColor:'white'}}>
        <Sidebar Icon={DashboardIcon} title="Dashboard"/>
        <Sidebar Icon={PersonIcon} title="Profile" />
        <Sidebar Icon={TouchAppIcon} title="Grades" />
        <Sidebar Icon={MessageIcon} title="Messages" />
        <Sidebar
          Icon={SettingsApplicationsIcon}
          title="Preferences"
        />
        <Sidebar Icon={ExitToAppIcon} title="Logout" />
        </div>
    </div>
  )
}

export default Dashboard;
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <Link to='/dashboard' style={{ color:'black' ,textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText >
        대시보드  
      </ListItemText>
    </ListItemButton>
    </Link>

    <Link to='/plan' style={{ color:'black' ,textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="생산계획 조회/등록" route='/plan'/>
    </ListItemButton>
    </Link>

    <Link to='/performance' style={{ color:'black' ,textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="생산실적" route='/performance'/>
    </ListItemButton>
    </Link>

    <Link to='/monitoring' style={{ color:'black' ,textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="공정 모니터링" route='/monitoring'/>
    </ListItemButton>
    </Link>

    <Link to='/tagTrend' style={{ color:'black' ,textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Tag 트랜드" route='/tagTrend'/>
    </ListItemButton>
    </Link>
  </React.Fragment>
);

{/*export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
</ListItemButton>
  </React.Fragment>
);*/}
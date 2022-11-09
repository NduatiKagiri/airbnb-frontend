import React from 'react'
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

function OnboardModal() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div>

<ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="10px">
              <Box display="flex" justifyContent="center" alignItems="center"    >
                <Image
                  alt="profile-user"
                  width={100}
                  height={80}
                  src={ 'https://i.ibb.co/WnxQ4rs/travis.jpg'}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                  loading="eager"
                  layout="fixed"
                  />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}
          display="flex" flexDirection='column'  justifyContent="cente" columnGap='200'

          >

                <MenuItem
              icon={<HomeOutlinedIcon />}
              onClick={() => setSelected()}
              active={selected}
              style={{
                color: colors.grey[100], }}>
                    <Typography> Dashboard </Typography>
               <Link href='/' >  </Link>
               </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
                pages
            </Typography>

            <MenuItem
            icon={<PeopleOutlinedIcon />}
            onClick={() => setSelected()}
            active={selected}
           style={{
           color: colors.grey[100], }}>
        <Typography> Student </Typography>
            <Link href='/student' >  </Link>
       </MenuItem>



       <MenuItem
            icon={<ContactsOutlinedIcon  />}
            onClick={() => setSelected()}
            active={selected}
           style={{
           color: colors.grey[100], }}>
        <Typography> Teacher </Typography>
            <Link href='/teacher' >  </Link>
       </MenuItem>

       <MenuItem
     icon={<CalendarTodayOutlinedIcon />}
     onClick={() => setSelected()}
     active={selected}
    style={{
    color: colors.grey[100], }}>
      <Typography> Event</Typography>
          <Link href='/event' >  </Link>
      </MenuItem>

            <MenuItem
      icon={<CalendarTodayOutlinedIcon />}
      onClick={() => setSelected()}
      active={selected}
      style={{
      color: colors.grey[100], }}>
      <Typography> Finance</Typography>
          <Link href='/finance' >  </Link>
      </MenuItem>


                <MenuItem
                icon={<PersonOutlinedIcon />}
                onClick={() => setSelected()}
                active={selected}
                style={{
                color: colors.grey[100], }}>
                <Typography> User</Typography>
                    <Link href='/user' >  </Link>
                </MenuItem>




            <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            onClick={() => setSelected()}
            active={selected}
            style={{
            color: colors.grey[100], }}>
            <Typography>Latest Activity</Typography>
                <Link href='/activity' >  </Link>
            </MenuItem>




          </Box>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default OnboardModal

<AppBar className={classes.appBar} position="static" color="inherit">
  <div className={classes.brandContainer}>
    <Typography
      component={Link}
      to="/"
      className={classes.heading}
      variant="h3"
      allign="center"
    >
      News Blog
    </Typography>
    <img
      className={classes.image}
      src={bridge001}
      alt="bridge001"
      height="60"
    />
  </div>

  <Toolbar>
    {user ? (
      <div className={classes.profile}>
        <Avatar
          className={classes.purple}
          alt={user.result.name}
          src={user.result.imageUrl}
        >
          {user.result.name.charArt(0)}
        </Avatar>
        <Typography className={classes.userName} variant="h6">
          {user.result.name}
        </Typography>
        <Button
          className={classes.logout}
          variant="contained"
          color="secondary"
        >
          Logout
        </Button>
      </div>
    ) : (
      <Button component={Link} to="/auth" variant="contained" color="primary">
        Sign In
      </Button>
    )}
  </Toolbar>
</AppBar>;

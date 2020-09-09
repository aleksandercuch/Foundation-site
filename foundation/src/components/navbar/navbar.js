import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import SignedInLink from './signedInLink';
import SmallNavbar from './smallNavbar';
import "./navbar.css";

class Navbar extends Component {

	render() {
		return (
			<Box mb={1}>
				<Grid
					container
					direction="row-reverse"
					justify="center"
					alignItems="flex-start"
				>
					<Grid item xs={9}>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
							spacing={5}
						>
							<Grid item xs={12}>
								<Grid
									container
									direction="row"
									justify="center"
									alignItems="center"
								>
									<Grid item md={10} xs={11}>
										<Grid
											container
											direction="column"
											justify="flex-end"
											alignItems="center"
										>
											<Grid item xs={12}>
												<NavLink to="/" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
													<Hidden smDown>
														<Box fontSize="h2.fontSize" fontWeight="fontWeightLight" fontFamily="Monospace">
															FUNDACJA POMOST
														</Box>
													</Hidden>
													<Hidden mdUp>
														<Box fontSize="h4.fontSize" fontWeight="fontWeightLight" fontFamily="Monospace">
															FUNDACJA POMOST
														</Box>
													</Hidden>
												</NavLink>
											</Grid>
										</Grid>
									</Grid>
									<Grid item md={2} xs={1}>
										<Hidden mdDown>
											{!this.props.auth.uid ? (
											<Grid
												container
												direction="row"
												justify="flex-end"
												alignItems="flex-start"
											>
												<Grid item xs={4}>
													<Link href="https://www.facebook.com/fundacjapomost/" color="textSecondary" target="_blank">
														<FacebookIcon fontSize="large" />
													</Link>
												</Grid>
												<Grid item xs={4}>
													<Link href="https://twitter.com/fundacja_pomost?lang=pl" color="textSecondary" target="_blank">
														<TwitterIcon fontSize="large" />
													</Link>
												</Grid>
												<Grid item xs={4}>
													<Link href="https://www.youtube.com/c/FundacjaPomost" color="textSecondary" target="_blank">
														<YouTubeIcon fontSize="large" />
													</Link>
												</Grid>
											</Grid>
											) : (
												<SignedInLink />
											)}
										</Hidden>
										<Hidden lgUp>
											<SmallNavbar />
										</Hidden>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Hidden mdDown>
									<nav>
										<ul>
											<li class="menu">
												<NavLink to="/o-fundacji">O FUNDACJI</NavLink>
												<ul class="subMenu aboutMenu">
													<li><NavLink to="/misja">misja</NavLink></li>
													<li><NavLink to="/co-robimy">co robimy?</NavLink></li>
													<li><NavLink to="/zespol">zespół</NavLink></li>
													<li><NavLink to="/projekty">projekty</NavLink></li>
													<li><NavLink to="/sprawozdania">sprawozdania</NavLink></li>
												</ul>
											</li>
											<li class="menu">
												<NavLink to="/osrodek-readaptacji">OŚRODEK READAPTACJI</NavLink>
												<ul class="subMenu readaptationMenu">
													<li><NavLink to="/dla-kogo">Dla kogo?</NavLink></li>
													<li><NavLink to="/zalozenia">Założenia</NavLink></li>
													<li><a href="#">Program</a>
														<ul class="superSubMenu">
															<li><NavLink to="/punkt-konsultacyjny">punkt konsultacyjny</NavLink></li>
															<li><NavLink to="/etap-readaptacji">etap readaptacji</NavLink></li>
															<li><NavLink to="/etap-postrehabilitacji">etap postrehabilitacji</NavLink></li>
															<li><NavLink to="/grupy-wsparcia">grupy wsparcia</NavLink></li>
														</ul>
													</li>
													<li><NavLink to="/o-metodzie">o metodzie</NavLink></li>
												</ul>
											</li>
											<li class="menu"><NavLink to="/oferta-szkolen">OFERTA SZKOLEŃ</NavLink></li>
											<li class="menu"><NavLink to="/potrzebujesz-wsparcia">POTRZEBUJESZ WSPARCIA?</NavLink></li>

											<li class="menu"><NavLink to="/chcesz-pomoc">CHCESZ POMÓC?</NavLink></li>
											<li class="menu"><NavLink to="/blog">BLOG</NavLink></li>
											<li class="menu"><NavLink to="/kontakt">KONTAKT</NavLink></li>
										</ul>
									</nav>
								</Hidden>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={1} sm={2} xs={4}>
						<img className="oppImage" src="https://static.wixstatic.com/media/ed491c_ce6e670531c04532b5ea9a3e11f84bd0~mv2_d_1250_1250_s_2.png/v1/fill/w_138,h_137,al_c,q_85,usm_0.33_1.00_0.00/logo_opp_czarne2.webp" alt="logo error"></img>
					</Grid>
				</Grid>
			</Box>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	  auth: state.firebase.auth,
	}
  };
  
  export default connect(mapStateToProps, null)(Navbar);
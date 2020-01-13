const footer = document.getElementById('footer');

footer.innerHTML = '';
footer.innerHTML = `
		<div class="footer">
			<!-- container -->
			<div class="container">
				<div class="footer-top">
						<div class="footer-grids">
							<div class="col-md-3 f-address wow bounceIn" data-wow-delay="0.4s">
								<h5>Address</h5>
								<ul>
									<li>Dan Ngerem Sports Foundation,</li>
									<li>32 Balarabe Musa Crescent, </li> 
									<li>Victoria Island,</li>
									<li>Lagos, Nigeria</li>
									<li>Telephone: +234 (0) 8037176661</li>
									<li>E-mail : <a href="mailto:info@danngeremsportsfoundation.com">info@danngeremsportsfoundation.com</a></li>
								</ul>
							</div>
							<div class="col-md-6 f-address f-contact wow bounceIn" data-wow-delay="0.4s">
								<h5>Stay in Touch</h5>
								<form>
									<input type="text" placeholder="Email address" required="">
									<input type="submit" value="Subscribe">
								</form>
							</div>
							<div class="col-md-3 footer-logo wow bounceIn" data-wow-delay="0.4s">
								<a href="index.html">DNSF</a>
								<div class="footer-left">
									<ul>
										<li><a class="facebook" target="_blank" href="https://www.facebook.com/Dan-Ngerem-Sports-Foundation-567197040090316/"><i class="fa fa-facebook"></i></a></li>
										<li><a class="twitter" target="_blank" href="https://twitter.com/Danngeremsports"><i class="fa fa-twitter"></i></a></li>
										<li><a class="you-tube" target="_blank" href="https://www.youtube.com/watch?v=NgJFYjt_X98"><i class="fa fa-youtube"></i></a></li>
										<li><a class="linked-in" target="_blank" href="https://www.instagram.com/danngeremsportsfoundation/?utm_source=ig_profile_share&igshid=y1yjb6c0iakq"><i class="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="footer-bottom">
							<div class="copyright wow bounceIn" data-wow-delay="0.4s">
							  	<p>© 2020 DNSF. All Rights Reserved | Design by  <a href="http://oluakainstitute.ng/" target="_blank">Oluaka Institute of Technology</a> </p>
							</div>
							<div class="clearfix"> </div>
						</div>
				</div>
			</div>
			<!-- //container -->
		</div>
`;
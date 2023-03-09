<?php
include'main-header.php'
?>



	<!-- Home Design Inner Pages -->
	<div class="ulockd-inner-home">
		<div class="container text-center">
			<div class="row">
				<div class="ulockd-inner-conraimer-details">
					<div class="col-md-12">
						<h1 class="text-uppercase">JOB APPLY FORM</h1>
					</div>
					<div class="col-md-12">
						<div class="ulockd-icd-layer">
							<ul class="ulockd-icd-sub-menu">
								<li class="list-inline-item"><a href="#"> HOME </a></li>
								<li class="list-inline-item"><a href="#"> > </a></li>
								<li class="list-inline-item"><a href="#"> JOB APPLY FORM </a> </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Our About -->
	<section class="ulockd-about">
	  <div class="container">
	    <div class="row">
	      <div class="col-lg-6 offset-lg-3">
	        <div class="booking_form_style1">
	          <form method="post" id="job-apply1-form" action="http://unlockdesizn.com/html/health-and-beauty/comfort-home/demo/includes/job-apply1.php" enctype="multipart/form-data">
	            <div class="row">
	              <div class="col-md-6">
	                <div class="mb-3">
                    <label class="form-label" for="">Name</label>
                    <input type="text" class="form-control form_control" name="name" id="name" placeholder="Enter name">
                  </div>
	              </div>
	              <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label" for="">Email</label>
                    <input type="email" class="form-control form_control" name="email" id="email" placeholder="unlock@yourmail.com">
                  </div>
	              </div>
	              <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label" for="">Message</label>
                    <textarea class="form-control" name="message" id="" cols="30" rows="5"></textarea>
                  </div>
	              </div>
	              <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label" for="">Select attachment</label><br>
                    <input type="file" name="attachment" id="attachment" class="form-control-file">
                    <span class="text-danger" id="file-error"></span>
                  </div>
	              </div>
	              <div class="col-md-12">
                  <div class="mb-3">
                    <div class="g-recaptcha" id="recaptcha" data-callback="recaptcha_callback" data-sitekey="6LenStUZAAAAADFndFfBZsTzYmSJIwIrnpscPQ2f"></div>
                  </div>
                  <button type="submit" class="btn btn-thm" id="submit" disabled>Send Details</button>
	              </div>
	            </div>
	          </form>
            <br>
            <div id="alert"></div>
	        </div>
	      </div>
	    </div>
	  </div>
	</section>

		<?php
include'footer.php'
?>
<a class="scrollToHome" href="#"><i class="fa fa-home"></i></a>
</div>
<!-- Wrapper End -->
<script src="js/jquery-1.12.4.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/bootsnav.js"></script>
<script src="js/jquery.mmenu.all.js"></script>
<script src="js/parallax.js"></script>
<script src="js/scrollto.js"></script>
<script src="js/jquery-scrolltofixed-min.js"></script>
<script src="js/jquery.counterup.js"></script>
<script src="js/gallery.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/slider.js"></script>
<script src="js/video-player.js"></script>
<script src="js/timepicker.js"></script>
<script src="js/tweetie.js"></script>
<!-- Job Apply Form Script -->
<script src='../../../../../www.google.com/recaptcha/api.js'></script>
<script src="../../../../../www.google.com/recaptcha/api8eaf.html?render=6LenStUZAAAAADFndFfBZsTzYmSJIwIrnpscPQ2f"></script>
<script src="js/form-scripts/job-apply1-form.html"></script>
<!-- Custom script for all pages --> 
<script src="vendor/s-customizer/js/color-switcher.js"></script>
<script src="js/script.js"></script>
</body>

<!-- Mirrored from unlockdesizn.com/html/health-and-beauty/comfort-home/demo/ulockd-job-apply-form.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 23 Feb 2023 06:28:37 GMT -->
</html>
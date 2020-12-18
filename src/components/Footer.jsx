import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"



function MyFooter() {
  return (
    <>
      <footer class="page-footer pt-4">
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-4 col-lg-3 mr-auto mb-1">
              <div class="font-weight-bold mb-1 link" id="icon">
              <FontAwesomeIcon className="icon mr-3" icon={faFacebook} />
              <FontAwesomeIcon className="icon mr-3" icon={faInstagram} />
                <FontAwesomeIcon className="iconv mr-3" icon={faTwitter} />
                <FontAwesomeIcon className="icon mr-3" icon={faYoutube} />
              </div>
              <div>
                <a class="link" href="https://www.netflix.com/browse/subtitles">
                  <span class="text">Audio and Subtitles</span>
                </a>
              </div>
              <div>
                <a class="link" href="https://www.netflix.com/browse/subtitles">
                  <span class="text">Media Center</span>
                </a>
              </div>
              <div>
                <a class="link" href="https://www.netflix.com/browse/subtitles">
                  <span class="text">Privacy</span>
                </a>
              </div>
              <div>
                <a class="link" href="https://www.netflix.com/browse/subtitles">
                  <span class="text">Contact Us</span>
                </a>
              </div>
              <div class="mt-3 ml-2">
                <button type="button" id="serviceButton">
                  Service Code
                </button>
              </div>
              <div class="button mt-3 mb-3">
                <span class="copyright">© 1997-2020 Netflix, Inc.</span>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 mr-auto mt-4 mb-1">
              <div>
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text"></span>
                </a>
              </div>
              <div id="links">
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text">Audio Description</span>
                </a>
              </div>
              <div>
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text">Investor Relations</span>
                </a>
              </div>
              <div>
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text">Legal Notices</span>
                </a>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 mr-auto mt-4 mb-1">
              <div>
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text"></span>
                </a>
              </div>
              <div id="links">
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text">Help Center</span>
                </a>
              </div>
              <div>
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text">Jobs</span>
                </a>
              </div>
              <div>
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text">Cookie Prefrences</span>
                </a>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 mr-auto mt-4 mb-1">
              <div>
                <a
                  class="link mt-5"
                  href="https://www.netflix.com/browse/subtitles"
                >
                  <span class="text"></span>
                </a>
              </div>
              <div id="links">
                <a class="link" href="https://www.netflix.com/browse/subtitles">
                  <span class="text">Gift Cards</span>
                </a>
              </div>
              <div>
                <a class="link" href="https://www.netflix.com/browse/subtitles">
                  <span class="text">Terms of Use</span>
                </a>
              </div>
              <div>
                <a class="link" href="https://www.netflix.com/browse/subtitles">
                  <span class="text">Corporate Information</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MyFooter;

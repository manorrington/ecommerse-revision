import React from 'react'

import '../../sass/footer.scss'


const Footer = () => {
    return (
        <section className="footer">
        <hr className="footer-seperator" />
        <section className="footer-social-media">
          <a href="/" ><i class="fa-brands fa-github"></i></a>
          <a href="/" ><i class="fa-brands fa-twitter"></i></a>
          <a href="/" ><i class="fa-brands fa-instagram"></i></a>
          
          
          
        </section>
        <section className="footer-info">
          <section className="footer-info-center">
            <section className="footer-info__email">
              shop.info@gmail.com
            </section>
            <section className="footer-info__terms">
              Terms and Conditions
              <br />
              greatRecords &copy; 2022 
            </section>
          </section>
        </section>
        <hr className="footer-seperator" />
      </section>
    )
}

export default Footer
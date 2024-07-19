import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/about.css';
import founderImage from "../assets/about/founder.jpeg";
import awardImage1 from "../assets/about/award1.png";
import awardImage2 from "../assets/about/award2.png";
import awardImage3 from "../assets/about/award3.png";
import awardImage4 from "../assets/about/epc.jpg";
import solar from "../assets/about/solar-panel.webp";
import CountUp from "./CountUp";

const AboutUs = () => {
  const projectsCompleted = "100+";
  const employeesWorking = "40+";
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const videoId = "KvWSCzrvSA0"; // Replace with your YouTube video ID
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=YOUR_YOUTUBE_API_KEY`
        );
        const thumbnailUrl =
          response.data.items[0]?.snippet.thumbnails.medium.url;
        setThumbnailUrl(thumbnailUrl);
      } catch (error) {
        console.error("Error fetching YouTube video thumbnail:", error);
      }
    };

    fetchThumbnail();
  }, []);

  return (
    <div id="aboutus" className="aboutus">
      <div className="aboutus_container">
        {/* About Us Section */}
        <div className="aboutus_section">
          <div className="aboutus_welcome"></div>
          <div className="aboutus_content_container">
            <img src={solar} alt="Solar Panels" className="aboutus_image" />
            <div className="aboutus_intro">
              <h2 className="aboutus_title">Welcome to Greenroots</h2>
              <h2 className="aboutus_title">Renewable Energy</h2>
              <p className="aboutus_short_description">
                We empower homes and businesses with sustainable energy solutions,
                reducing costs and environmental impact. Committed to innovation,
                we lead in renewable energy technology. At Greenroots Renewable
                Energy Pvt. Ltd., we envision every home and business harnessing
                clean, renewable energy for a healthier planet. Join us in paving
                the way towards a sustainable future.
              </p>
              <div className="aboutus_content">
                <div className="aboutus_stats">
                  <div className="aboutus_stat">
                    <div className="stat_icon">🌟</div>
                    <div className="stat_info">
                      <h3 className="stat_number">{projectsCompleted}</h3>
                      <p className="stat_label">Projects Completed</p>
                    </div>
                  </div>
                  <div className="aboutus_stat">
                    <div className="stat_icon">👥</div>
                    <div className="stat_info">
                      <h3 className="stat_number">{employeesWorking}</h3>
                      <p className="stat_label">Employees Working</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Us Section */}

        {/* YouTube Video Section */}
        <div className="youtube_video">
          <div className="video_description">
            <h2>Why should we Switch to Solar?</h2>
            <p>
            Switching to solar energy is crucial for reducing our dependence on fossil fuels and mitigating climate change. Solar power is renewable, abundant, and emits significantly fewer greenhouse gases compared to traditional energy sources. Embracing solar energy not only lowers carbon footprints but also offers long-term cost savings and energy independence. Greenroots can facilitate this transition by providing expert design & installation services tailored to individual needs. With a commitment to quality and sustainability, Greenroots ensures seamless integration of solar systems, optimizing efficiency and reliability while contributing to a cleaner environment and a brighter future.
            </p>
          </div>
          <div className="video_frame">
            {/* Display the thumbnail if available */}
            {thumbnailUrl && (
              <img src={thumbnailUrl} alt="YouTube Video Thumbnail" />
            )}
            {/* Replace the video ID with your YouTube video ID */}
            <iframe
              width="520"
              height="320"
              src="https://www.youtube.com/embed/KvWSCzrvSA0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* End YouTube Video Section */}
        <CountUp/>
        
        <div className="aboutus_section">
          <div className="section_title">Awards and Achievements</div>
          <div className="awards_grid">
            <div className="award_card">
              <img src={awardImage1} alt="Award 1" />
              <p className="award_title">Rooftop EPC Company of the Year 2020</p>
            
            </div>
            <div className="award_card">
              <img src={awardImage2} alt="Award 2" />
              <p className="award_title">Mentioned in the solar installation companies in the 2020-21</p>
             
            </div>
            <div className="award_card">
              <img src={awardImage3} alt="Award 3" />
              <p className="award_title">Rooftop EPC Company of the Year 2022</p>
            
            </div>
            <div className="award_card">
              <img src={awardImage4} alt="Award 4" />
              <p className="award_title">Rooftop EPC Company of the Year 2023</p>
              
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="aboutus_section">
          <div className="founder_box">
            <div className="founder_section">
              <div className="founder_image">
                <img
                  src={founderImage}
                  alt="Anup Arora"
                  className="circular-image"
                />
              </div>
              <div className="founder_content">
                <h3>Anup Arora</h3>
                <h5>Founder & Director</h5>
                <p>
                  PGDM-SCM (Symbiosis, Pune)
                  <br />
                  B.E. (Kota Engineering College, University of Rajasthan)
                </p>
                <p>
                  Experience:
                  <br />
                  Over 28 Years of work experience in Manufacturing,
                  <br/>
                    Design,
                  Supply chain, Solar power.
                  <br />
                  Worked with Asahi India Glass Limited, ACME Tele 
                  <br/>
                  Power Limited
                  & ACME Solar Energy Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Founder Section */}
        
        {/* Additional Sections can be added as needed */}
      </div>
    </div>
  );
};

export default AboutUs;

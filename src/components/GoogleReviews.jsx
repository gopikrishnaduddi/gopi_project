import React from "react";
import "./GoogleReviews.css";

const GoogleReviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-title">
          What Our Client Say On Google Reviews
        </h2>

        <p className="reviews-subtitle">
          Don’t just take our word for it. Hear what our satisfied clients have
          to say about <br />
          their experience partnering with SEOC
        </p>

        <div className="reviews-wrapper">

          {/* Review Card 1 */}
          <div className="review-card">
            <div className="review-left">
              <p className="review-text">
                "I can't recommend [Your Company Name] enough. Their team is not
                only highly skilled and knowledgeable but also incredibly
                responsive and easy to work with. They truly go above and beyond
                to deliver exceptional results."
              </p>

              <div className="stars">★★★★★</div>

              <div className="review-footer">
                <span className="name">Jhon Doe</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="google-icon"
                />
              </div>
            </div>

            <div className="review-right">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Client"
              />
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="review-card">
            <div className="review-left">
              <p className="review-text">
                "I can't recommend [Your Company Name] enough. Their team is not
                only highly skilled and knowledgeable but also incredibly
                responsive and easy to work with. They truly go above and beyond
                to deliver exceptional results."
              </p>

              <div className="stars">★★★★★</div>

              <div className="review-footer">
                <span className="name">Jhon Doe</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="google-icon"
                />
              </div>
            </div>

            <div className="review-right">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Client"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
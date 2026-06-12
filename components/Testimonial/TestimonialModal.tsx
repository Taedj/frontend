import { useState, useRef, ChangeEvent, FormEvent } from "react";
import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { FiUploadCloud } from "react-icons/fi";
import ReviewsClient from "../../http/ReviewsService";
import { useQueryClient } from "@tanstack/react-query";
import "./TestimonialModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TestimonialModal = ({ isOpen, onClose }: Props) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("Student");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);
  const [hoverStars, setHoverStars] = useState<number | null>(null);
  
  // Image states
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Status states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const maxReviewLength = 150;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setError("Image size must be less than 2MB");
        return;
      }
      setImageFile(file);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullname.trim()) {
      setError("Full Name is required");
      return;
    }
    if (!country.trim()) {
      setError("Country is required");
      return;
    }
    if (!review.trim()) {
      setError("Comment is required");
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("visitor_name", fullname.trim());
    formData.append("visitor_role", role);
    formData.append("visitor_country", country.trim());
    formData.append("review", review.trim());
    formData.append("stars", stars.toString());
    
    if (imageFile) {
      formData.append("visitor_image", imageFile);
    }

    try {
      await ReviewsClient.post("/reviews", formData);
      setSuccess(true);
      // Invalidate queries to fetch updated testimonials list
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err: unknown) {
      console.error(err);
      const errorMessage =
        err && typeof err === "object" && "message" in err
          ? (err as { message: string }).message
          : "Failed to submit testimonial. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset states
    setFullname("");
    setRole("Student");
    setCountry("");
    setReview("");
    setStars(5);
    setImageFile(null);
    setImagePreview(null);
    setError(null);
    setSuccess(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={!isLoading}
      style={{
        overlay: {
          backgroundColor: "rgba(17, 20, 24, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          zIndex: 10000,
        },
        content: {
          backgroundColor: "transparent",
          border: "none",
          padding: "0",
          inset: "50% auto auto 50%",
          transform: "translate(-50%, -50%)",
          width: "fit-content",
          height: "fit-content",
          zIndex: 10000,
          overflow: "visible",
        },
      }}
    >
      <div className="testimonial-modal-card">
        {/* Floating Close Button */}
        {!isLoading && (
          <button
            onClick={handleClose}
            className="testimonial-modal-close"
            aria-label="Close modal"
          >
            <RxCross1 size={18} />
          </button>
        )}

        {success ? (
          <div className="testimonial-modal-success">
            <div className="success-icon-wrap">🎉</div>
            <h2>Thank You!</h2>
            <p>Your testimonial has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="testimonial-modal-form">
            <h2 className="form-title">Let Your Comment</h2>
            <p className="form-subtitle">Share your experience with us</p>

            {error && <div className="form-error-msg">{error}</div>}

            <div className="form-grid">
              {/* Left Side: Avatar Upload & Rating */}
              <div className="form-col-left">
                <div 
                  className="avatar-upload-area"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="avatar-preview-img" />
                  ) : (
                    <div className="upload-placeholder">
                      <FiUploadCloud className="upload-icon" />
                      <span>Upload Profile Picture</span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden-file-input"
                    style={{ display: "none" }}
                  />
                </div>

                <div className="rating-selector-wrap">
                  <label className="input-label">Your Rating</label>
                  <div className="star-rating-row">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((starVal) => {
                      const isActive = hoverStars !== null ? starVal <= hoverStars : starVal <= stars;
                      return (
                        <button
                          type="button"
                          key={starVal}
                          className={`star-btn ${isActive ? "active" : ""}`}
                          onClick={() => setStars(starVal)}
                          onMouseEnter={() => setHoverStars(starVal)}
                          onMouseLeave={() => setHoverStars(null)}
                        >
                          <AiFillStar />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side: Form Inputs */}
              <div className="form-col-right">
                <div className="input-group">
                  <label htmlFor="fullname" className="input-label">Full Name</label>
                  <input
                    id="fullname"
                    type="text"
                    placeholder="Enter your name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                    disabled={isLoading}
                    className="text-input"
                  />
                </div>

                <div className="form-row">
                  <div className="input-group flex-1">
                    <label htmlFor="role" className="input-label">Role</label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      disabled={isLoading}
                      className="select-input"
                    >
                      <option value="Student">Student</option>
                      <option value="Client">Client</option>
                      <option value="Professor">Professor</option>
                      <option value="Developer">Developer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="input-group flex-1">
                    <label htmlFor="country" className="input-label">Country</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="e.g. Germany"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      disabled={isLoading}
                      className="text-input"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <div className="label-row">
                    <label htmlFor="review" className="input-label">Comment</label>
                    <span className="char-counter">
                      {review.length}/{maxReviewLength}
                    </span>
                  </div>
                  <textarea
                    id="review"
                    rows={3}
                    placeholder="Write your comment..."
                    value={review}
                    maxLength={maxReviewLength}
                    onChange={(e) => setReview(e.target.value)}
                    required
                    disabled={isLoading}
                    className="textarea-input"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="submit-btn"
            >
              {isLoading ? (
                <span className="spinner-loader">Submitting...</span>
              ) : (
                "Submit Testimonial"
              )}
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default TestimonialModal;

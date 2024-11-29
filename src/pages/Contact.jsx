import React, { useState } from "react";
import { PageSection } from "../components/layout/PageSection";
import { motion, AnimatePresence } from "framer-motion";
import { usePageAnimation } from "../hooks/usePageAnimation";
import { TitleBadge } from "../components/badges/TitleBadge";
import {
  pageTitleVariants,
  pageContentVariants,
  contactSpriteVariants,
  contactFormVariants,
  contactButtonVariants,
} from "../animations/framerMotion";

// UI Components
const ContactSprite = ({ isDarkMode }) => (
  <motion.div variants={contactSpriteVariants} className="text-center">
    <i className={`nes-octocat animate ${isDarkMode ? "is-dark" : ""} inline-block mb-2`} />
    <p className="pixelated text-sm md:text-base text-gray-700 dark:text-gray-300 !transition-none">
      Let's get in touch! &nbsp;Drop me a message below.
    </p>
  </motion.div>
);

const ContactForm = ({ isDarkMode, isSubmitting, handleSubmit }) => (
  <motion.div variants={contactFormVariants}>
    <motion.form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8 md:mt-12 px-4 md:px-0">
      <div className="mb-6 md:mb-8">
        <input type="text" name="name" required placeholder="Name" 
               className="pixel-input h-8 md:h-10 text-xs md:text-sm" />
      </div>
      <div className="mb-6 md:mb-8">
        <input type="email" name="email" required placeholder="Email" 
               className="pixel-input h-8 md:h-10 text-xs md:text-sm" />
      </div>
      <div className="mb-8 md:mb-10">
        <textarea name="message" required placeholder="Message" 
                  className="pixel-textarea h-20 md:h-24 text-xs md:text-sm" />
      </div>
      <motion.div variants={contactButtonVariants} className="text-center">
        <button type="submit" disabled={isSubmitting} className="pixel-button">
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-pulse">Sending</span>
              <span className="animate-[bounce_1s_infinite]">.</span>
              <span className="animate-[bounce_1s_infinite_.2s]">.</span>
              <span className="animate-[bounce_1s_infinite_.4s]">.</span>
            </span>
          ) : "Send Message"}
        </button>
      </motion.div>
    </motion.form>
  </motion.div>
);

const StatusDialog = ({ isDarkMode, showDialog, submitStatus, setShowDialog }) => (
  <AnimatePresence>
    {showDialog && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowDialog(false)}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <dialog className={`nes-dialog ${isDarkMode ? "is-dark" : ""}`} open>
            <form method="dialog">
              <p className="pixelated">
                {submitStatus === "success" 
                  ? "Message sent successfully!" 
                  : "Failed to send message. Please try again."}
              </p>
              <menu className="dialog-menu flex justify-center">
                <button onClick={() => setShowDialog(false)}
                        className="pixel-button">
                  Got It!
                </button>
              </menu>
            </form>
          </dialog>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

/**
 * Contact Page Component
 * Handles form submission and displays status
 */
const Contact = ({ isDarkMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const { ref, mainControls } = usePageAnimation(true, 0.3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xyzykqqa", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setShowDialog(true);
    }
  };

  return (
    <PageSection
      ref={ref}
      id="contact"
      mainControls={mainControls}
      isDarkMode={isDarkMode}
      className="bg-white dark:bg-[#212529]"
    >
      <motion.div className="w-full max-w-6xl mx-auto flex flex-col min-h-full">
        <div className="flex-1 flex flex-col h-full">
          {/* Title */}
          <motion.div variants={pageTitleVariants} 
                     className="flex-none py-12 md:py-6 lg:py-8 flex justify-center -mt-3 lg:-mt-8">
            <TitleBadge isDarkMode={isDarkMode} title="Contact" />
          </motion.div>

          {/* Form */}
          <motion.div variants={pageContentVariants} 
                     className="flex-1 flex flex-col justify-center py-4 md:py-16 lg:py-8">
            <ContactSprite isDarkMode={isDarkMode} />
            <ContactForm
              isDarkMode={isDarkMode}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </motion.div>

      <StatusDialog
        isDarkMode={isDarkMode}
        showDialog={showDialog}
        submitStatus={submitStatus}
        setShowDialog={setShowDialog}
      />
    </PageSection>
  );
};

export default Contact;

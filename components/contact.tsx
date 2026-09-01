"use client";
import React from "react";
import SectionHeading from "./section-heading";
import style from "./contact.module.css";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useTheme } from "@/context/theme-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const { theme } = useTheme();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="container section-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className={style.contactText}>
        Please contact me directly as{" "}
        <a href="mailto:db.home.2468@gmail.com">db.home.2468@gmail.com</a> or through
        this form
      </p>
      <form
        className={style.contactForm}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email successfully sent");
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          className={`${theme === "dark" ? style.dark : ""} ${style.contactFormEmail}`}
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          className={`${theme === "dark" ? style.dark : ""} ${style.contactFormMessage}`}
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

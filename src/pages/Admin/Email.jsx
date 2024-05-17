import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css"; // Include the Quill stylesheet

export default function Email() {
  const [email, setEmail] = useState({
    subject: "",
    html: "",
    recipientType: "members",
    specificEmails: [""],
    files: [],
  });
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

  const emailVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.1 },
    },
    exit: { opacity: 0, x: -200, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    setEmail((prev) => ({ ...prev, specificEmails: [""] }));
  }, [email.recipientType]);

  useEffect(() => {
    const FontAttributor = ReactQuill.Quill.import("attributors/style/font");
    FontAttributor.whitelist = ["sans-serif", "serif", "monospace"];
    ReactQuill.Quill.register(FontAttributor, true);

    const SizeAttributor = ReactQuill.Quill.import("attributors/style/size");
    SizeAttributor.whitelist = ["24px", "32px", "40px"];
    ReactQuill.Quill.register(SizeAttributor, true);

    const AlignStyle = ReactQuill.Quill.import("attributors/style/align");
    ReactQuill.Quill.register(AlignStyle, true);

    const BackgroundStyle = ReactQuill.Quill.import(
      "attributors/style/background"
    );
    ReactQuill.Quill.register(BackgroundStyle, true);

    const ColorStyle = ReactQuill.Quill.import("attributors/style/color");
    ReactQuill.Quill.register(ColorStyle, true);
  }, []);

  const addEmailInput = () => {
    setEmail((prev) => ({
      ...prev,
      specificEmails: [...prev.specificEmails, ""],
    }));
  };

  const handleEmailChange = (index, value) => {
    const updatedEmails = [...email.specificEmails];
    updatedEmails[index] = value;
    setEmail((prev) => ({ ...prev, specificEmails: updatedEmails }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    setEmail((prev) => ({ ...prev, files: Array.from(event.target.files) }));
  };

  const removeEmailInput = (index) => {
    const filteredEmails = email.specificEmails.filter(
      (_, idx) => idx !== index
    );
    setEmail((prev) => ({ ...prev, specificEmails: filteredEmails }));
  };

  const handleQuillChange = (content) => {
    setEmail((prev) => ({ ...prev, html: content }));
  };

  const sendEmailData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${serverURL}/api/sendEmailData`,
        email,
        { withCredentials: true }
      );
      console.log("Email sent successfully", response.data);
      alert("Email sent successfully");
      setEmail({
        subject: "",
        html: "",
        recipientType: "members",
        specificEmails: [""],
        files: [],
      });
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to send email");
    }
  };

  const sendEmailAttachments = async (event) => {
    event.preventDefault();
    const fd = new FormData();
    for (let i = 0; i < email.files.length; i++) {
      // This assumes every file is just appended with the field 'attachment'
      fd.append("attachment", email.files[i]);
    }
    try {
      const response = await axios.post(
        `${serverURL}/api/sendEmailAttachments`,
        fd,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"], // Text formatting
        [{ header: 1 }, { header: 2 }], // Heading sizes
        [{ list: "ordered" }, { list: "bullet" }], // Lists
        [{ script: "sub" }, { script: "super" }], // Subscripts and superscripts
        [{ indent: "-1" }, { indent: "+1" }], // Indent and outdent
        [{ direction: "rtl" }], // Text direction
        [{ size: ["24px", "32px", "40px"] }], // Font size
        [{ color: [] }, { background: [] }], // Text color and background
        [{ font: [] }], // Font family
        [{ align: [] }], // Text alignment
        ["clean"], // Remove formatting button
        ["link"], // Insert links, images, and videos
      ],
    },
    clipboard: {
      matchVisual: true,
    },
    history: {
      delay: 1000,
      maxStack: 100,
    },
  };

  return (
    <motion.div
      className="email-admin"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={emailVariants}
    >
      <form
        className="email-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Send Email</h1>
        <div>
          <label htmlFor="recipientType">Recipient Type:</label>
          <select
            id="recipientType"
            name="recipientType"
            onChange={handleChange}
          >
            <option value="members">Club Members</option>
            <option value="subscribers">Newsletter Subscribers</option>
            <option value="specific">Specific Email Addresses</option>
          </select>
        </div>
        {email.recipientType === "specific" &&
          email.specificEmails.map((emailAddress, index) => (
            <div key={index}>
              <label htmlFor={`specificEmails-${index}`}>
                Email Address {index + 1}:
              </label>
              <input
                type="text"
                className={`specific-email-input`}
                value={emailAddress}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                placeholder="Enter email address"
              />
              <button
                type="button"
                disabled={email.specificEmails.length == 1}
                onClick={() => removeEmailInput(index)}
              >
                Remove
              </button>
            </div>
          ))}
        {email.recipientType === "specific" && (
          <button type="button" onClick={addEmailInput} required>
            Add Another Email
          </button>
        )}
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <ReactQuill
          value={email.html}
          onChange={(e) => handleQuillChange(e)}
          modules={modules}
        />
        <div>
          <label htmlFor="attachments">Attachments:</label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button
          onClick={async (e) => {
            await sendEmailAttachments(e);
            await sendEmailData(e);
          }}
        >
          Send Email
        </button>
      </form>
    </motion.div>
  );
}

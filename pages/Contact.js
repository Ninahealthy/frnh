import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";
import Styles from "@/styles/contact.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xvonzqvg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label className={Styles.label} htmlFor="name">
          Name
        </label>
        <input className={Styles.input} id="name" type="text" name="name" />
        <ValidationError prefix="name" field="text" errors={state.errors} />
        <label className={Styles.label} htmlFor="email">
          Email Address
        </label>
        <input className={Styles.input} id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className={Styles.label} htmlFor="message">
          Message
        </label>
        <textarea className={Styles.textarea} id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className={Styles.button}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </>
  );
}

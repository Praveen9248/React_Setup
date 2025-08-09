import { Input, Button } from "../components";
const Contact = () => {
  return (
    <div>
      <form
        action="https://formsubmit.co/1df231672eb61e4a4dd3c69020bc6b2c"
        method="POST"
      >
        <Input
          label="Email: "
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input label="Name: " name="name" placeholder="Enter your name" />
        <Input
          label="Message: "
          name="message"
          placeholder="Enter your message"
        />
        <Button type="submit" className="w-full my-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;

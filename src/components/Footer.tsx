import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <div className=" flex justify-center absolute left-0 bottom-0 w-full py-8 px-5">
      <p>
        Thanks for visiting! |{" "}
        <span className="hover:text-blue-400 hover:opacity-80">
          <Icon icon={"mdi:email-outline"} className="inline mr-1" />
          <a href="">daffaalkahffi24@gmail.com</a>
          <Icon icon={"mdi:arrow-top-right"} className="inline" />
        </span>
      </p>
    </div>
  );
}

import { Gamepad, Linkedin, Github, Instagram } from "lucide-react";

function Footer() {
  return (
    <div className="w-full flex justify-center bg-zinc-900 text-zinc-300 border-t border-zinc-500">

      <div className="container flex justify-between px-5 py-5">
        <div className="flex gap-2">
          <Gamepad className="hover:text-sky-800 hover:animate-wiggle"/>
          <a className="tracking-wider" href="#">Loja de Games - Generation </a>
        </div>
        <div>
          <p>Feito com 💖 por Fern. All Rights Reserved. 2025</p>
        </div>
        <div className='flex gap-8'>
	        <a href="https://www.linkedin.com/in/fern-menezes" target="_blank">
    	        <Linkedin className="size-6 cursor-pointer hover:scale-110 hover:text-sky-600 hover:animate-wiggle" />
            </a>
            <a href="https://www.instagram.com/artsfern" target="_blank">
    	        <Instagram className="size-6 cursor-pointer hover:scale-110 hover:text-sky-600 hover:animate-wiggle" />
            </a>
            <a href="https://www.github.com/fern-menezes" target="_blank">
    	        <Github className="size-6 cursor-pointer hover:scale-110 hover:text-sky-600 hover:animate-wiggle" />
	        </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

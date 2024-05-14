import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
         
            </div></div>

    

          <div>
            <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
              This website serves a repository for the final project of the course Semantic Digital Libraries at University of Bologna. <br></br>Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
              <a
                href="https://web3templates.com/"
                target="_blank"
                rel="noopener">
                Web3Templates and tweaked with even more ♥ by Alice Picco.
              </a>{" "}
            
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

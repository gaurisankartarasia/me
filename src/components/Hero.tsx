import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMessageCircle,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

import { Card } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ResumeButton from "./Resume";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-[#fefaf5] dark:bg-[#2a2420]">
      {/* Vintage texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Decorative borders */}
      <div
        className="absolute inset-x-0 top-0 h-4 bg-repeat-x"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 12px",
        }}
      ></div>
      <div
        className="absolute inset-x-0 bottom-0 h-4 bg-repeat-x transform rotate-180"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 12px",
        }}
      ></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <Card className="relative w-full max-w-4xl bg-[#fefaf5] dark:bg-[#352c27] border-[#832c12] dark:border-[#e6d5c3] border-2">
          {/* Corner ornaments */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#832c12] dark:border-[#e6d5c3]"></div>
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#832c12] dark:border-[#e6d5c3]"></div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#832c12] dark:border-[#e6d5c3]"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#832c12] dark:border-[#e6d5c3]"></div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-8 text-center md:text-left">
                <div className="relative inline-block mx-auto md:mx-0">
                  {/* Vintage frame effect */}
                  <div className="absolute inset-0 border-4 border-[#832c12] dark:border-[#e6d5c3] rounded-lg transform -rotate-3"></div>
                  <div className="relative w-28 h-28 lg:h-48 lg:w-48">
                    {!imageLoaded && (
                      <div className="absolute inset-0 rounded-lg animate-pulse bg-[#e6d5c3]" />
                    )}
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955_11zon.jpg?alt=media&token=204ab2c4-926a-44b0-88d2-394dc1f34251"
                      className={`w-28 h-28 lg:h-48 lg:w-48 rounded-lg object-cover shadow-lg transition-all duration-500 transform rotate-3 
                        ${
                          imageLoaded
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }
                      `}
                      alt="Gaurisankar Tarasia"
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <h1 className="font-serif text-xl lg:text-4xl font-bold text-[#832c12] dark:text-[#e6d5c3]">
                    GAURISANKAR TARASIA
                  </h1>
                  {/* Decorative underline */}
                  <div className="mt-2 h-1 w-32 mx-auto md:mx-0 bg-[#832c12] dark:bg-[#e6d5c3] opacity-50"></div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="grid grid-cols-3 gap-6">
                  <TooltipProvider>
                    {[
                      {
                        icon: FiMail,
                        label: "Email",
                        href: "mailto:gaurisankartarasia@gmail.com?subject=From Your Website&body=Hello%20Gaurisankar,",
                      },

                      {
                        icon: FiLinkedin,
                        label: "LinkedIn",
                        href: "https://linkedin.com/in/gaurisankar-tarasia-0a32a8235",
                      },
                      {
                        icon: FiGithub,
                        label: "GitHub",
                        href: "https://github.com/gaurisankartarasia",
                      },
                    ].map((social) => (
                      <Tooltip key={social.label}>
                        <TooltipTrigger asChild>
                          <Link
                            to={social.href}
                            target="_blank"
                            className="group flex flex-col items-center p-4 rounded-lg    dark:hover:bg-[#3a342f] transition-all border border-[#832c12] dark:border-[#e6d5c3] "
                          >
                            <social.icon
                              size="20"
                              className=" text-[#832c12] dark:text-[#e6d5c3]"
                            />

                            <span className="mt-2 text-sm font-serif text-[#832c12] dark:text-[#e6d5c3]">
                              {social.label}
                            </span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Go to {social.label} profile</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>

                <div className="flex justify-center space-x-8 pt-6 border-t-2 border-[#832c12]  dark:border-[#e6d5c3] border-dashed">
                  <div className="flex justify-center">
                    <ResumeButton
                      liveResumeLink="https://www.canva.com/design/DAGhhbzugGA/8XIdx8tWkO4MEyiDVJIC-A/view?utm_content=DAGhhbzugGA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h55fa4fb22f"
                      downloadResumeLink="https://raw.githubusercontent.com/gaurisankartarasia/4565dnfi4/main/Gaurisankar%20Tarasia20250313.pdf"
                    />
                  </div>
                  <TooltipProvider>
                    {[
                      {
                        icon: FiInstagram,
                        label: "Instagram",
                        href: "https://www.instagram.com/gaurisankartarasia/",
                      },
                      {
                        icon: FiFacebook,
                        label: "Facebook",
                        href: "https://www.facebook.com/gaurisankar.littu",
                      },
                      {
                        icon: FiTwitter,
                        label: "Twitter",
                        href: "https://x.com/gaurisankar_li2",
                      },
                      {
                        icon: FiMessageCircle,
                        label: "WhatsApp",
                        href: "https://wa.me/9938292646?text=Hello%20Gaurisankar%20I%20found%20your%20contact%20from%20your%20portfolio%20website",
                      },
                    ].map((social) => (
                      <Tooltip key={social.label}>
                        <TooltipTrigger asChild>
                          <Link
                            to={social.href}
                            target="_blank"
                            className="group relative p-2"
                          >
                            <social.icon
                              size="20"
                              className=" text-[#832c12] dark:text-[#e6d5c3] transition-transform group-hover:scale-110"
                            />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Go to {social.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

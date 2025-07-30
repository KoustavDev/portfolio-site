import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { ShineBorder } from "@/components/magicui/shine-border";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
            <Image
              src="/images/Koustav-Majhi.jpeg"
              alt="Koustav Majhi"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center">
            <Card className="relative overflow-hidden w-full p-6">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Let&#39;s Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
                <div className="mt-8">
                  <p className="text-center mb-4">Or reach out via:</p>
                  <div className="flex justify-center space-x-4">
                    <Link
                      href="https://github.com/KoustavDev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:scale-110 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900"
                      >
                        <GithubIcon className="h-5 w-5" />
                        <span className="sr-only">GitHub Profile</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/koustav-majhi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:scale-110 hover:!bg-[#0077B5] hover:!text-white hover:!border-[#0077B5]"
                      >
                        <LinkedinIcon className="h-5 w-5" />
                        <span className="sr-only">LinkedIn Profile</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

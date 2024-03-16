import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  FacebookIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Dhiraj chakma. I live in Nürnberg, where I design the Web.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Dhiraj Chakma. I live in Nürnberg, where I design the web.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm Dhiraj Chakma, currently navigating the realms of Development
              Economics in Nürnberg, Germany, while passionately delving into
              web development. My curiosity led me from self-study to a
              transformative experience at Le Wagon bootcamp in 2023, where I
              mastered a suite of web technologies and co-created Moosician, a
              project that sharpened my skills in relational databases and UI
              design.
            </p>
            <p>
              The challenge of bringing Moosician to life taught me the
              importance of collaborative development and the power of
              technology in solving real-world problems. This experience was
              instrumental in blending my analytical skills from economics with
              the creative and technical demands of web development, fueling my
              aspiration to innovate in the tech sphere.
            </p>
            <p>
              Driven by the principle of continuous improvement, I ventured into
              React to build a portfolio project that showcases my capability to
              integrate complex functionalities with aesthetic design. This
              project was not just a learning milestone but a reflection of my
              dedication to pursuing excellence in web development.
            </p>
            <p>
              As I seek to merge my analytical background with my passion for
              technology, my goal is to become a full-stack developer in an
              environment that values <em>growth</em>, <em>learning</em>, and
              <em> innovation</em>. I am committed to contributing to a team
              that aims to make a meaningful impact through technology.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https:www.facebook.com/seth.chakma.1"
              icon={FacebookIcon}
              className="mt-4"
            >
              Follow on facebook
            </SocialLink>
            <SocialLink
              href="https://github.com/dhiraj-chakma"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/dhiraj-chakma"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:chakmadhiraj@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              chakmadhiraj@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'From Code to Creation: Navigating My World of Software and Operating Systems',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="From Code to Creation: Navigating My World of Software and Operating Systems"
      intro="Navigating the digital tapestry, I blend programming languages, software, and operating systems to sculpt innovative solutions. My journey is a fusion of creativity and technology, where each project is a step towards mastering the art of full-stack development."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” Lenovo ThinkPad T430, Intel Core i5, 16GB RAM (2012)">
            Before this, I was using a computer with a Core i3 processor, but
            the switch to my Lenovo ThinkPad T430 has been a game-changer. It's
            incredibly fast and excels at multitasking, making a huge difference
            in my daily work.
          </Tool>
          <Tool title="ASUS TUF Gaming VG27, 27” WQHD (2560 x 1440), 165Hz (Overclocking)">
            The ASUS TUF Gaming VG27 not only offers visual comfort with its
            expansive 27-inch display, making it a joy to look at, but also
            enhances my productivity and debugging efficiency with its clear,
            larger screen space. It's an essential tool in my setup for both
            work and play, effortlessly blending aesthetics with functionality.
          </Tool>
          <Tool title="Dell KB-522 Keyboard">
            If the Dell KB-522 Keyboard were any larger, I'd need a map to
            navigate from the escape key to the space bar. Luckily, it's just
            the right size for marathon typing sessions, providing a comfort
            akin to fluffing a cloud before laying your fingers down for a nap.
          </Tool>

          <Tool title="GTPlayer Gaming Chair">
            If I’m going to bend the rules of proper posture into a work of art,
            I might as well do it seated in the luxury of a GTPlayer Gaming
            Chair. It turns every seating arrangement into a lavish comfort
            experience, regardless of how creatively I twist and turn.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VSCode">
            VSCode might not have the pedigree of ancient text-editing relics or
            the mystique of editor wars long past, but its sleek interface and
            Jedi-like extensions make it the unsung hero of my coding saga. Who
            needs the fancy frills when you've got the force of VSCode at your
            fingertips?
          </Tool>
          <Tool title="Terminal">
            Embracing the Linux terminal is like unlocking a new level of
            computing efficiency. It's a powerhouse of productivity, where every
            command and shortcut shaves seconds off tasks, turning minutes into
            moments. It's not just a tool; it's my command center for navigating
            the vast digital landscape with precision and speed.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Figma became my design compass during bootcamp, guiding the
            aesthetics of every project I embark on. It's not just a tool; it's
            a prelude to creation, where ideas take shape and visions get their
            first glimpse of reality. Now, it's the starting line for every
            digital adventure, ensuring my journey from concept to completion is
            both beautiful and seamless.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Trello">
            Trello, my project ally since bootcamp, transforms chaos into
            clarity with its visual boards and cards. It's the cornerstone of
            organization for every project, guiding my journey from concept to
            completion.
          </Tool>
          <Tool title="Tomato Timer">
            TomatoTimer has become my secret weapon for productivity, carving
            out focused work sessions with precision. This simple yet powerful
            tool disciplines my day, blending short bursts of concentration with
            essential breaks, ensuring I stay refreshed and productive longer.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

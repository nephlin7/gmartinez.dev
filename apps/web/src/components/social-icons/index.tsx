import { IconBrandLinkedin, IconBrandTwitter, IconBrandGithub, IconBrandDribbble } from '@tabler/icons-react';

interface SocialLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

function SocialLink({ href, title, icon }: SocialLinkProps) {
  return (
    <li>
      <a rel="noopener noreferrer" target="_blank" href={href} title={title}>
        {icon}
      </a>
    </li>
  );
}

export function SocialIcons() {
  const socialLinks = [
    {
      href: 'https://github.com/nephlin7',
      title: 'Go to my Github',
      icon: <IconBrandGithub />,
    },
    {
      href: 'https://www.linkedin.com/in/gmartinez92/',
      title: 'Go to my Linkedin',
      icon: <IconBrandLinkedin />,
    },
    {
      href: 'https://dribbble.com/geraldM',
      title: 'Go to my portfolio',
      icon: <IconBrandDribbble />,
    },
    {
      href: 'https://twitter.com/GeraldM_92',
      title: 'Follow me on Twitter',
      icon: <IconBrandTwitter />,
    },
  ];

  return (
    <ul className="absolute bottom-[30px] inline-flex gap-2">
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </ul>
  );
}

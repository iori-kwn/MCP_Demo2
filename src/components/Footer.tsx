import { FigmaIcon } from './icons/FigmaIcon';
import { TwitterIcon, InstagramIcon, YouTubeIcon, LinkedInIcon } from './icons/SocialIcons';

function Footer() {
  const linkSections = [
    {
      title: 'Use cases',
      links: [
        'UI design',
        'UX research',
        'Wireframing',
        'Diagramming',
        'Brainstorming',
        'Online whiteboard',
        'Team meetings',
      ],
    },
    {
      title: 'Explore',
      links: [
        'Design',
        'Prototyping',
        'Development features',
        'Design systems',
        'Collaboration features',
        'Design process',
        'FigJam',
      ],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Best practices', 'Colors', 'Color wheel', 'Support', 'Developers', 'Resource library'],
    },
  ];

  return (
    <div className="bg-[#ffffff] relative shrink-0 w-[1200px]">
      <div className="[flex-flow:wrap] box-border content-start flex gap-4 items-start justify-start overflow-clip pb-40 pt-8 px-8 relative w-[1200px]">
        {/* Logo and Social Media */}
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-60 p-0 relative shrink-0 w-[262px]">
          <div className="h-[35px] relative shrink-0 w-[23.333px]">
            <FigmaIcon />
          </div>
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
            <div className="h-6 relative shrink-0 w-[23.98px]">
              <TwitterIcon />
            </div>
            <div className="relative shrink-0 size-6">
              <InstagramIcon />
            </div>
            <div className="relative shrink-0 size-6">
              <YouTubeIcon />
            </div>
            <div className="relative shrink-0 size-6">
              <LinkedInIcon />
            </div>
          </div>
        </div>

        {/* Link Sections */}
        {linkSections.map((section, index) => (
          <div
            key={index}
            className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[262px]"
          >
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-4 pt-0 px-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left text-nowrap">
                  <p className="block leading-[1.4] whitespace-pre">{section.title}</p>
                </div>
              </div>
            </div>
            {section.links.map((link, linkIndex) => (
              <div key={linkIndex} className="h-[22px] relative shrink-0 w-[89px]">
                <div className="absolute bottom-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-0 not-italic right-[26.966%] text-[#1e1e1e] text-[16px] text-left text-nowrap top-0">
                  <p className="block leading-[1.4] whitespace-pre">{link}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute border-[#d9d9d9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default Footer;

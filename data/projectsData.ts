interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'SLM Creatives',
    description: `My freelance digital marketing company. This is where I do most of my work in content creation including graphic design, video editing and website development.`,
    imgSrc: '/static/images/slm.png',
    href: 'https://www.slmcreatives.com',
  },
  {
    title: 'The Pejabat Digital',
    description: `Membawa perkhidmatan pemasaran digital komprehensif yang termasuk website, SEO, pengiklanan, konten media sosial dan sebagainya`,
    imgSrc: '/static/images/tpd.png',
    href: 'https://thepejabat.my/',
  },
]

export default projectsData
